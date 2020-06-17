import "reflect-metadata";

import { ApolloServer } from "apollo-server-micro";
import { Min } from "class-validator";
import {
  Arg,
  buildSchemaSync,
  Field,
  InputType,
  ObjectType,
  Query,
  Resolver,
} from "type-graphql";
import type { PageConfig } from "next";

@ObjectType()
class A {
  @Field()
  a: string;
}

@InputType()
class Input {
  @Min(100)
  @Field()
  a: number;
}

@Resolver(() => A)
class QueryResolver {
  @Query(() => A)
  hello(@Arg("a", () => Input) a: Input) {
    return { a: "asd" };
  }
}

const schema = buildSchemaSync({
  resolvers: [QueryResolver],
  emitSchemaFile: true,
});

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
