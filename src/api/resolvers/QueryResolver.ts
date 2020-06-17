import { Arg, Query, Resolver } from "type-graphql";
import { A } from "../entities/A";
import { Input } from "../entities/Input";

@Resolver(() => A)
export class QueryResolver {
  @Query(() => A)
  hello(@Arg("a", () => Input) _a: Input) {
    return { a: "asd" };
  }
}
