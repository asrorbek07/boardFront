import { QueryRequest } from '@vizendjs/accent';
import { BulletinPostRdo } from '~/models';


export interface FindBulletinPostQuery extends QueryRequest<BulletinPostRdo> {
  postId?: string;
}

