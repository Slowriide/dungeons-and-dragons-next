"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { SessionProvider } from "next-auth/react";

interface Props {
  children: React.ReactNode;
}

const queryClient = new QueryClient();

export const Providers = ({ children }: Props) => {
  return (
    <SessionProvider>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </SessionProvider>
  );
};
