import { QueryRequest } from '@vizendjs/accent';
import { Board } from '~/models';


export interface FindBulletinBoardQuery extends QueryRequest<Board> {
  boardId?: string;
}

