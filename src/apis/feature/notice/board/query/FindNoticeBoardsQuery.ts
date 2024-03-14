import { QueryRequest } from '@vizendjs/accent';
import { Board } from '~/models';


export interface FindNoticeBoardsQuery extends QueryRequest<Board[]> {
}

