import { QueryRequest } from '@vizendjs/accent';
import { NoticePostRdo } from '~/models';


export interface FindNoticePostsQuery extends QueryRequest<NoticePostRdo[]> {
  boardId?: string;
}

