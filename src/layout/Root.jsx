import React from "react";
import { AppContent } from "."

import { ApolloClient } from "apollo-client";
import { createHttpLink } from "apollo-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";
import { ApolloProvider } from '@apollo/react-hooks';

const getApolloClient = () => {

    const API_URL = "https://challenge.agranimo.com/graphql";

    const client = new ApolloClient({
        link: createHttpLink({ uri: API_URL }),
        cache: new InMemoryCache({ freezeResults: true }),
        assumeImmutableResults: true
    });
    return client
}
export const Root = (props) => (
    <ApolloProvider client={getApolloClient()}>
        <AppContent {...props} />
    </ApolloProvider>
)

export default Root;