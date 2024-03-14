import { CreationDataObject, IdName } from '@vizendjs/accent';


export interface ReadCheckCdo extends CreationDataObject {
  reader: IdName;
  postId: string;
}

