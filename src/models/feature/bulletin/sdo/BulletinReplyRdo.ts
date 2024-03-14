import { CreationDataObject } from '@vizendjs/accent';
import { Reply, ThumbUpRecord } from '~/models';


export interface BulletinReplyRdo extends CreationDataObject {
  reply: Reply;
  thumbUps: ThumbUpRecord[];
}

