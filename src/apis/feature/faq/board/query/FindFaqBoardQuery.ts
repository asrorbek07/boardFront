import { QueryRequest } from '@vizendjs/accent';
import { Board } from '~/models';


export interface FindFaqBoardQuery extends QueryRequest<Board> {
  boardId?: string;
}

