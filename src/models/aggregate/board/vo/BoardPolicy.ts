import { ValueObject } from '@vizendjs/accent';
import { PostRule, CommentRule } from '~/models';


export interface BoardPolicy extends ValueObject {
  postRule: PostRule;
  commentRule: CommentRule;
}

