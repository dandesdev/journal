import React, { useEffect, useState } from "react";
import type { Lang } from "../types";
import { SortToggle } from "./SortToggle";
import { Pagination } from "./Pagination";
import { usePostsPerPage } from "../hooks/usePostsPerPage";

type Post = {
  slug: string;
  data: {
    title: string;
    description?: string;
    date: Date;
  };
};

type Props = {
  lang: Lang;
  posts: Post[];
};

export const PostsList: React.FC<Props> = ({ lang, posts }) => {
  const [sort, setSort] = useState<"newest" | "oldest">("newest");
  const [page, setPage] = useState(1);
  const postsPerPage = usePostsPerPage();

  // On mount, read query params
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const sortParam = params.get("sort") as "newest" | "oldest" | null;
    const pageParam = parseInt(params.get("page") || "1", 10);

    if (sortParam) setSort(sortParam);
    if (pageParam > 1) setPage(pageParam);
  }, []);

  // Update URL when sort/page changes
  useEffect(() => {
    const params = new URLSearchParams();
    if (sort !== "newest") params.set("sort", sort);
    if (page > 1) params.set("page", page.toString());
    //const newUrl = `journal/${lang}?${params.toString()}`;
    const newUrl = `?${params.toString()}`; //test deploy 21
    window.history.replaceState({}, "", newUrl);
  }, [sort, page, lang]);

  const sorted = [...posts].sort((a, b) =>
    sort === "oldest"
      ? a.data.date.getTime() - b.data.date.getTime()
      : b.data.date.getTime() - a.data.date.getTime()
  );

  const totalPages = Math.ceil(sorted.length / postsPerPage);
  
  // Clamp page to valid range when postsPerPage changes (e.g., on window resize)
  useEffect(() => {
    if (page > totalPages && totalPages > 0) {
      setPage(totalPages);
    }
  }, [page, totalPages]);

  const start = (page - 1) * postsPerPage;
  const paginated = sorted.slice(start, start + postsPerPage);

  // Shortcuts
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft" && page > 1) {
        setPage((p) => p - 1);
      }
      if (e.key === "ArrowRight" && page < totalPages) {
        setPage((p) => p + 1);
      }
      if (e.key.toLowerCase() === "s") {
        setSort((s) => (s === "newest" ? "oldest" : "newest"));
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [page, totalPages]);

  return (
    <>
      <div className="w-full flex justify-end mt-8">
        <SortToggle
          lang={lang}
          sort={sort}
          onToggle={() => setSort(sort === "newest" ? "oldest" : "newest")}
        />
      </div>

      <div className="md:max-w-[800px] sm:w-[50%]">
        <ul className="space-y-4">
          {paginated.map((post) => (
            <li key={post.slug}>
              <a href={`/journal/${lang}/posts/${post.slug}`}>
                <div className="group hover:bg-secondary/10 transition-all duration-200 p-1">
                  <p className="text-xl group-hover:underline font-bold">
                    {post.data.title}
                  </p>
                  <p className="text-neutral text-sm">
                    &#8618; {post.data.description}
                  </p>
                  <p className="flex flex-row gap-2 text-neutral text-sm">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="hidden"><path d="M8 2v4"/><path d="M16 2v4"/><rect width="18" height="18" x="3" y="4" rx="2"/><path d="M3 10h18"/></svg>{new Date(post.data.date).toDateString()}
                  </p>
                </div>
              </a>
            </li>
          ))}
        </ul>
      </div>
      {totalPages > 1 && (
        <div className="w-full flex justify-center">
          <Pagination
            lang={lang}
            page={page}
            totalPages={totalPages}
            onPageChange={setPage}
          />
        </div>
      )}
    </>
  );
};
