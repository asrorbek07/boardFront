import { QueryRequest } from '@vizendjs/accent';
import { Board } from '~/models';


export interface FindFaqBoardByOffsetQuery extends QueryRequest<Board[]> {
  stageId?: string;
}

