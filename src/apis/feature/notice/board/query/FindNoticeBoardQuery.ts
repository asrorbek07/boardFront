import { QueryRequest } from '@vizendjs/accent';
import { Board } from '~/models';


export interface FindNoticeBoardQuery extends QueryRequest<Board> {
  postId?: string;
}

