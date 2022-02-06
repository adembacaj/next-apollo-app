import { ApolloClient, InMemoryCache } from "@apollo/client";
import { persistCache, LocalStorageWrapper } from 'apollo3-cache-persist';

const cache = new InMemoryCache();

persistCache({
    cache,
    storage: new LocalStorageWrapper(typeof window !== 'undefined' && window.localStorage),
  });

const client = new ApolloClient({
    cache
});

export default client;