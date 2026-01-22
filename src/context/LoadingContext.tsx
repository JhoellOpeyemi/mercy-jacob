import { createContext } from "react";

interface LoadingContextType {
  loading: boolean;
  setLoading: (loading: boolean) => void;
  pageTransition: boolean;
  setPageTransition: (pageTransition: boolean) => void;
  page: string;
  setPage: (page: string) => void;
}

export const LoadingContext = createContext<LoadingContextType | undefined>(
  undefined,
);
