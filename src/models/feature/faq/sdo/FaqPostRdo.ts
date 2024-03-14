import { CreationDataObject } from '@vizendjs/accent';
import { Post } from '~/models';


export interface FaqPostRdo extends CreationDataObject {
  post: Post;
}

