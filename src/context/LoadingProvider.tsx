import { useState } from "react";
import type { ReactNode } from "react";
import { LoadingContext } from "@/context/LoadingContext";

export const LoadingProvider = ({ children }: { children: ReactNode }) => {
  const [loading, setLoading] = useState<boolean>(true);
  const [pageTransition, setPageTransition] = useState<boolean>(false);
  const [page, setPage] = useState<string>("");

  return (
    <LoadingContext.Provider
      value={{
        loading,
        setLoading,
        pageTransition,
        setPageTransition,
        page,
        setPage,
      }}
    >
      {children}
    </LoadingContext.Provider>
  );
};
