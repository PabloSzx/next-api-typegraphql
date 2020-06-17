import "reflect-metadata";

import { ApolloServer } from "apollo-server-micro";

import { schema } from "@api/schema";

import type { PageConfig } from "next";

const server = new ApolloServer({
  schema,
  playground: true,
});

const apolloServerHandler = server.createHandler({
  path: "/api/graphql",
});

export default apolloServerHandler;

export const config: PageConfig = {
  api: {
    bodyParser: false,
  },
};
