'use client';

import { ThemeProvider } from '@/components/theme-provider';
import { ApolloProvider } from '@apollo/client';
import { getApolloClient } from '../../lib/apollo-client';

interface ProvidersProps {
  children: React.ReactNode;
}

export function Providers({ children }: ProvidersProps) {
  const client = getApolloClient();

  return (
    <ApolloProvider client={client}>
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        {children}
      </ThemeProvider>
    </ApolloProvider>
  );
}
