import { Min } from "class-validator";
import { Field, InputType } from "type-graphql";
@InputType()
export class Input {
  @Min(100)
  @Field()
  a: number;
}
