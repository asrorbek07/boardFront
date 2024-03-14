import { CreationDataObject } from '@vizendjs/accent';
import { Comment, ThumbUpRecord } from '~/models';


export interface QnaAnswerRdo extends CreationDataObject {
  comment: Comment;
  thumbUps: ThumbUpRecord[];
}

