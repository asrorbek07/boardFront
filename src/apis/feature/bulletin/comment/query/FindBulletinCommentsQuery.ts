import { QueryRequest } from '@vizendjs/accent';
import { BulletinCommentRdo } from '~/models';


export interface FindBulletinCommentsQuery extends QueryRequest<BulletinCommentRdo[]> {
  postId?: string;
}

