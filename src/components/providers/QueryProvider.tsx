"use client";
import { createAsyncStoragePersister } from '@tanstack/query-async-storage-persister'
import { QueryClient } from '@tanstack/react-query';
import { PersistQueryClientProvider } from '@tanstack/react-query-persist-client';
import { ReactNode, useState } from 'react';

const persister = createAsyncStoragePersister({
  storage: window.localStorage,
})

export function QueryProvider({ children }: { children: ReactNode }) {
  const [queryClient] = useState(() => new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 60 * 1000,
      },
    },
  }));

  return (
    <PersistQueryClientProvider 
      persistOptions={{ 
        persister,
        dehydrateOptions: {
          shouldDehydrateQuery: (query) => {
          return query.meta?.persist === true;
          },
        }
      }} 
      client={queryClient}
      
      >
      {children}
    </PersistQueryClientProvider>
  );
}

