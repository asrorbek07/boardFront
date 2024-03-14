import { QueryRequest } from '@vizendjs/accent';
import { FaqPostRdo } from '~/models';


export interface FindFaqPostsByBoardIdQuery extends QueryRequest<FaqPostRdo[]> {
  boardId?: string;
}

