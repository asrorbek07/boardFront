import { CreationDataObject } from '@vizendjs/accent';


export interface ReplyCdo extends CreationDataObject {
  text: string;
  displayName: string;
  commentId: string;
}

