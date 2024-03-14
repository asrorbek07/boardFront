import { CreationDataObject } from '@vizendjs/accent';
import { Reply, ThumbUpRecord } from '~/models';


export interface QnaReplyRdo extends CreationDataObject {
  reply: Reply;
  thumbUps: ThumbUpRecord[];
}

