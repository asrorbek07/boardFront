import { CreationDataObject } from '@vizendjs/accent';
import { Comment, ThumbUpRecord } from '~/models';


export interface BulletinCommentRdo extends CreationDataObject {
  comment: Comment;
  thumbUps: ThumbUpRecord[];
}

