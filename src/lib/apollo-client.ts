import { ApolloClient, InMemoryCache } from '@apollo/client';

/* eslint-disable  @typescript-eslint/no-explicit-any */
let apolloClient: ApolloClient<any> | null = null;

export function getApolloClient(): ApolloClient<any> {
  if (!apolloClient) {
    apolloClient = new ApolloClient({
      uri: 'https://graphql-api-brown.vercel.app/api/graphql',
      cache: new InMemoryCache(),
    });
  }

  return apolloClient;
}
