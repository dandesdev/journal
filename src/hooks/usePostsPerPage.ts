import { useEffect, useState, useCallback } from "react";

const DEFAULT_POST_ITEM_HEIGHT = 104; // ~88px item + 16px gap
const DEFAULT_UI_OVERHEAD = 200; // ~header + sort + pagination + margins
const DEFAULT_MIN_POSTS = 3;
const DEFAULT_MAX_POSTS = 10;

type UsePostsPerPageOptions = {
  minPosts?: number;
  maxPosts?: number;
  postItemHeight?: number;
  uiOverhead?: number;
};

export const usePostsPerPage = (options: UsePostsPerPageOptions = {}) => {
  const {
    minPosts = DEFAULT_MIN_POSTS,
    maxPosts = DEFAULT_MAX_POSTS,
    postItemHeight = DEFAULT_POST_ITEM_HEIGHT,
    uiOverhead = DEFAULT_UI_OVERHEAD,
  } = options;

  const calculatePostsPerPage = useCallback(() => {
    if (typeof window === "undefined") return 5; // SSR fallback

    const availableHeight = window.innerHeight - uiOverhead;
    const calculated = Math.floor(availableHeight / postItemHeight);

    return Math.max(minPosts, Math.min(maxPosts, calculated));
  }, [minPosts, maxPosts, postItemHeight, uiOverhead]);

  const [postsPerPage, setPostsPerPage] = useState(calculatePostsPerPage);

  useEffect(() => {
    const handleResize = () => {
      setPostsPerPage(calculatePostsPerPage());
    };

    window.addEventListener("resize", handleResize);
    // Recalculate on mount in case SSR value differs
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, [calculatePostsPerPage]);

  return postsPerPage;
};
