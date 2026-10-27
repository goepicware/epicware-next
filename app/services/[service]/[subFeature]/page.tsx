import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import Breadcrumbs from "@/components/shared/Breadcrumbs";
import FinalCTA from "@/components/home/FinalCTA";
import StickyMobileCTA from "@/components/products/StickyMobileCTA";
import { getService, getSubFeature, SERVICES } from "@/lib/site/services";
import { getSubFeatureContent } from "@/lib/site/content";

export async function generateStaticParams() {
  return SERVICES.flatMap((s) => s.subFeatures.map((f) => ({ service: s.slug, subFeature: f.slug })));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ service: string; subFeature: string }>;
}): Promise<Metadata> {
  const { service, subFeature } = await params;
  const content = getSubFeatureContent(service, subFeature);
  if (!content) return {};
  const canonical = `https://www.epicware.ai/services/${service}/${subFeature}`;
  return {
    title: { absolute: content.frontmatter.metaTitle },
    description: content.frontmatter.metaDescription,
    alternates: { canonical },
    openGraph: { title: content.frontmatter.metaTitle, description: content.frontmatter.metaDescription, url: canonical },
    ...(content.frontmatter.draft ? { robots: { index: false, follow: false } } : {}),
  };
}

export default async function SubFeaturePage({
  params,
}: {
  params: Promise<{ service: string; subFeature: string }>;
}) {
  const { service: serviceSlug, subFeature: subFeatureSlug } = await params;
  const service = getService(serviceSlug);
  const subFeature = getSubFeature(serviceSlug, subFeatureSlug);
  if (!service || !subFeature) notFound();

  const content = getSubFeatureContent(serviceSlug, subFeatureSlug);
  if (!content) notFound();

  return (
    <>
      <section className="pt-28 pb-12 hero-gradient">
        <div className="container mx-auto px-6 max-w-4xl">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Services", href: "/services" },
              { label: service.name, href: `/services/${service.slug}` },
              { label: subFeature.name },
            ]}
          />
          <h1 className="font-display font-bold text-foreground mt-5 mb-4 leading-tight">
            {content.frontmatter.h1}
          </h1>
        </div>
      </section>

      <section className="py-12 lg:py-16">
        <div className="container mx-auto px-6 max-w-3xl prose prose-lg">
          <MDXRemote source={content.body} />
        </div>
      </section>

      <FinalCTA />
      <StickyMobileCTA />
      <div className="h-20 lg:hidden" />
    </>
  );
}
