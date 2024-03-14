import { QueryRequest } from '@vizendjs/accent';
import { FaqPostRdo } from '~/models';


export interface FindFaqPostQuery extends QueryRequest<FaqPostRdo> {
  postId?: string;
}

