import { CreationDataObject } from '@vizendjs/accent';


export interface CommentCdo extends CreationDataObject {
  text: string;
  displayName: string;
  accepted: boolean;
  postId: string;
}

