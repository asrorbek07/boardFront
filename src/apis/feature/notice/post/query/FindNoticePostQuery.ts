import { QueryRequest } from '@vizendjs/accent';
import { NoticePostRdo } from '~/models';


export interface FindNoticePostQuery extends QueryRequest<NoticePostRdo> {
  postId?: string;
}

