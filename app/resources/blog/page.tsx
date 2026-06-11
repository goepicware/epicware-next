import { redirect } from "next/navigation";

// Canonical blog hub is at /blog.
// Individual posts at /resources/blog/[slug]/ are unaffected.
export default function ResourcesBlogRedirect() {
  redirect("/blog");
}
