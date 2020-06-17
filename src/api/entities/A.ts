import { Field, ObjectType } from "type-graphql";
@ObjectType()
export class A {
  @Field()
  a: string;
}
