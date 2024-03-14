import { QueryRequest } from '@vizendjs/accent';
import { BulletinCommentRdo } from '~/models';


export interface FindBulletinCommentQuery extends QueryRequest<BulletinCommentRdo> {
  commentId?: string;
}

