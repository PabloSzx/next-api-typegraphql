import { buildSchemaSync } from "type-graphql";

import { QueryResolver } from "@api/resolvers/QueryResolver";

export const schema = buildSchemaSync({
  resolvers: [QueryResolver],
  emitSchemaFile: true,
});
