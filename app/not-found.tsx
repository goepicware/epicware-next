import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center hero-gradient px-6">
      <div className="text-center max-w-md">
        <p className="text-8xl font-black font-display gradient-text mb-6">404</p>
        <h1 className="text-2xl font-bold text-foreground mb-4">Page not found</h1>
        <p className="text-muted-foreground mb-8">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <Button asChild className="rounded-full bg-foreground text-background h-12 px-6 group">
          <Link href="/" className="flex items-center gap-2">
            Back to home
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </Button>
      </div>
    </div>
  );
}
