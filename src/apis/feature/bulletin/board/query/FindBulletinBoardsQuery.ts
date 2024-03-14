import { QueryRequest } from '@vizendjs/accent';
import { Board } from '~/models';


export interface FindBulletinBoardsQuery extends QueryRequest<Board[]> {
}

