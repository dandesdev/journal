import React from "react";
import type { Lang } from "../types";

type Props = {
  lang: Lang;
  page: number;
  totalPages: number;
  onPageChange: (page: number) => void;
};

export const Pagination: React.FC<Props> = ({
  lang,
  page,
  totalPages,
  onPageChange,
}) => {

  return (
    <nav
      className="mt-6 gap-4 items-center justify-center"
      role="navigation"
      aria-label={lang === "en" ? "Pagination" : "Paginação"}
    >
      <button
        onClick={() => onPageChange(page - 1)}
        aria-label={
          lang === "en" ? "Go to previous page" : "Ir para a página anterior"
        }
        className={`cursor-pointer px-3 py-1 rounded bg-neutral/20 hover:bg-neutral/40 transition-colors ${
          page > 1 ? "visible" : "invisible"
        }`}
      >
        ← {lang === "en" ? "Previous" : "Anterior"}
      </button>
      <span aria-current="page" className="px-2">
        {lang === "en" ? "Page" : "Página"} {page} {lang === "en" ? "of" : "de"}{" "}
        {totalPages}
      </span>
      <button
        onClick={() => onPageChange(page + 1)}
        aria-label={
          lang === "en" ? "Go to next page" : "Ir para a próxima página"
        }
        className={`cursor-pointer px-3 py-1 rounded bg-neutral/20 hover:bg-neutral/40 transition-colors ${
          page < totalPages ? "visible" : "invisible"
        }`}
      >
        {lang === "en" ? "Next →" : "Próxima →"}
      </button>
    </nav>
  );
};
