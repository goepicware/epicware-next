import Anthropic from "@anthropic-ai/sdk";

export const runtime = "nodejs";

const client = new Anthropic();

interface ChatMessage {
  role: "user" | "assistant" | "system";
  content: string;
}

export async function POST(request: Request) {
  try {
    const { messages }: { messages: ChatMessage[] } = await request.json();

    const systemMessage = messages.find((m) => m.role === "system");
    const userMessages = messages.filter((m) => m.role !== "system");

    const stream = await client.messages.stream({
      model: "claude-haiku-4-5-20251001",
      max_tokens: 512,
      system: systemMessage?.content,
      messages: userMessages.map((m) => ({
        role: m.role as "user" | "assistant",
        content: m.content,
      })),
    });

    const encoder = new TextEncoder();

    const readable = new ReadableStream({
      async start(controller) {
        try {
          for await (const event of stream) {
            if (
              event.type === "content_block_delta" &&
              event.delta.type === "text_delta"
            ) {
              const chunk = {
                choices: [{ delta: { content: event.delta.text } }],
              };
              controller.enqueue(
                encoder.encode(`data: ${JSON.stringify(chunk)}\n\n`)
              );
            }
          }
          controller.enqueue(encoder.encode("data: [DONE]\n\n"));
          controller.close();
        } catch (err) {
          controller.error(err);
        }
      },
    });

    return new Response(readable, {
      headers: {
        "Content-Type": "text/event-stream",
        "Cache-Control": "no-cache",
        Connection: "keep-alive",
      },
    });
  } catch {
    return Response.json({ error: "Failed to generate" }, { status: 500 });
  }
}
