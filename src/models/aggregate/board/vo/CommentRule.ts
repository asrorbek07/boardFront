import { ValueObject } from '@vizendjs/accent';


export interface CommentRule extends ValueObject {
  allowed?: boolean;
  anonymous?: boolean;
  thumbUp?: boolean;
}


