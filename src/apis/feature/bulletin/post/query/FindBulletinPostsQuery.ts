import { QueryRequest } from '@vizendjs/accent';
import { BulletinPostRdo } from '~/models';


export interface FindBulletinPostsQuery extends QueryRequest<BulletinPostRdo[]> {
  boardId?: string;
}

