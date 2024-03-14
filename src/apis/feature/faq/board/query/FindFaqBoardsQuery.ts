import { QueryRequest } from '@vizendjs/accent';
import { Board } from '~/models';


export interface FindFaqBoardsQuery extends QueryRequest<Board[]> {
}

