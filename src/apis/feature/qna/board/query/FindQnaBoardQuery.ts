import { QueryRequest } from '@vizendjs/accent';
import { Board } from '~/models';


export interface FindQnaBoardQuery extends QueryRequest<Board> {
  boardId?: string;
}

