import { CreationDataObject } from '@vizendjs/accent';
import { Post, ThumbUpRecord, ReadCheck } from '~/models';


export interface NoticePostRdo extends CreationDataObject {
  post: Post;
  thumbUps: ThumbUpRecord[];
  readChecks: ReadCheck[];
}

