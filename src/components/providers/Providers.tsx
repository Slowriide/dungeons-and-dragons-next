"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { SessionProvider } from "next-auth/react";

interface Props {
  children: React.ReactNode;
}

const queryClient = new QueryClient();

//Global application providers.
//
//This component centralizes all client-side context providers
//(authentication, data fetching, UI state, etc.) so they are
//mounted once at the root of the app.

export const Providers = ({ children }: Props) => {
  /**
   * Create a single QueryClient instance per browser session.
   * Using useState prevents the client from being recreated on re-renders,
   * which would otherwise reset cache and ongoing queries.
   */
  return (
    /**
     * SessionProvider handles authentication state across the app.
     * It must wrap all components that rely on next-auth hooks.
     */
    <SessionProvider>
      {/* 
        QueryClientProvider enables React Query caching, deduplication
        and background updates across the entire application.
      */}
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </SessionProvider>
  );
};
