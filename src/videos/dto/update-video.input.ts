import { CreateVideoInput } from './create-video.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateVideoInput extends PartialType(CreateVideoInput) {
  @Field(() => Int)
  id: number;

  @Field()
  title: string;

  @Field({ nullable: true })
  brief?: string;

  @Field()
  url: string;
}
