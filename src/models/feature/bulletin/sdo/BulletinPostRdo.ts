import { CreationDataObject } from '@vizendjs/accent';
import { Post, ThumbUpRecord, ReadCheck } from '~/models';


export interface BulletinPostRdo extends CreationDataObject {
  post: Post;
  thumbUps: ThumbUpRecord[];
  readChecks: ReadCheck[];
}

