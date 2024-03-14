import { CreationDataObject } from '@vizendjs/accent';
import { SentenceType } from '~/models';


export interface QnaThumbUpRecordCdo extends CreationDataObject {
  sentenceType: keyof typeof SentenceType;
  sentenceId: string;
}

