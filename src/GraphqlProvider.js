import React from "react";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { SampleGraphqlComponent } from "./SampleGraphqlComponent";

const defaultClient = new ApolloClient({
  uri: "https://swapi-graphql.netlify.app/.netlify/functions/index",
  cache: new InMemoryCache(),
});

export const GraphQLProviderExample = () => (
  <ApolloProvider client={defaultClient}>
    <SampleGraphqlComponent />
  </ApolloProvider>
);
