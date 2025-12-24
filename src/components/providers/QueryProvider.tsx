"use client";
import { createAsyncStoragePersister } from '@tanstack/query-async-storage-persister'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { PersistQueryClientProvider } from '@tanstack/react-query-persist-client';
import { ReactNode, useEffect, useState } from 'react';

const createPersister = () => {
  if (typeof window === "undefined") return null;

  return createAsyncStoragePersister({
    storage: window.localStorage,
  });
};

export function QueryProvider({ children }: { children: ReactNode }) {
  const [queryClient] = useState(() => new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 60 * 1000,
      },
    },
  }));
  const [persister, setPersister] = useState(createPersister);

  useEffect(() => {
    setPersister(createPersister());
  }, []);

  if (!persister) {
    return (
      <QueryClientProvider client={queryClient}>
        {children}
      </QueryClientProvider>
    );
  }

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

