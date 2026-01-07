import type { APIRoute } from "astro";
import { getCollection } from "astro:content";

export const GET: APIRoute = async ({ request }) => {
  const url = new URL(request.url);
  const lang = url.searchParams.get("lang");
  const all = await getCollection("posts");
  const items = all
    .filter((p) => (lang ? p.data.lang === lang : true))
    .map((p) => {
      const slugWithoutLang = p.slug.split("/")[1] || p.slug;
      return {
        slug: slugWithoutLang,
        title: p.data.title,
        description: p.data.description ?? "",
        tags: p.data.tags ?? [],
        lang: p.data.lang,
        date: p.data.date ? new Date(p.data.date).toISOString() : null,
      };
    });

  return new Response(JSON.stringify(items), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
};