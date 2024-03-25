// app/providers.tsx
'use client'

import {NextUIProvider} from '@nextui-org/react';
import { SessionProvider } from 'next-auth/react';
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useState } from 'react';


export function Providers({children}: { children: React.ReactNode }) {

  const [queryClient] = useState(() => new QueryClient())


  return (
    <SessionProvider>
      <QueryClientProvider client={queryClient}>
        <NextUIProvider>
          {children}
        </NextUIProvider>
      </QueryClientProvider>
    </SessionProvider>
  );
};