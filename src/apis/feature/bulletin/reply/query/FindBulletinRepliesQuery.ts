import { QueryRequest } from '@vizendjs/accent';
import { BulletinReplyRdo } from '~/models';


export interface FindBulletinRepliesQuery extends QueryRequest<BulletinReplyRdo[]> {
  commentId?: string;
}

