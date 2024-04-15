"use client";

import { ClerkProvider } from "@clerk/nextjs";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React, { PropsWithChildren } from "react";

const Providers = ({ children }: PropsWithChildren) => {
  const queryClient = new QueryClient();

  return (
    <ClerkProvider>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </ClerkProvider>
  );
};

export default Providers;
