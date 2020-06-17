import { Client } from "urql";

export const client = new Client({
  url: "/api/graphql",
});
