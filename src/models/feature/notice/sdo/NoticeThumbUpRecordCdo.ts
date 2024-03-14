import { CreationDataObject } from '@vizendjs/accent';
import { SentenceType } from '~/models';


export interface NoticeThumbUpRecordCdo extends CreationDataObject {
  sentenceType: keyof typeof SentenceType;
  sentenceId: string;
}

