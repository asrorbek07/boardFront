import { QueryRequest } from '@vizendjs/accent';
import { Board } from '~/models';


export interface FindQnaBoardsQuery extends QueryRequest<Board[]> {
}

