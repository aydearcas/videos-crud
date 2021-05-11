import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateVideoInput {
  @Field()
  title: string;

  @Field({ nullable: true })
  brief?: string;

  @Field()
  url: string;
}
