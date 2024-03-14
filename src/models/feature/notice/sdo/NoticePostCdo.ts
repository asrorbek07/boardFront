import { CreationDataObject } from '@vizendjs/accent';


export interface NoticePostCdo extends CreationDataObject {
  title: string;
  content: string;
  boardId: string;
}

