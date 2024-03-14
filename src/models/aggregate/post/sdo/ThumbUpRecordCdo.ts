import { CreationDataObject, IdName } from '@vizendjs/accent';
import { SentenceType } from '~/models';


export interface ThumbUpRecordCdo extends CreationDataObject {
  reader: IdName;
  sentenceType: keyof typeof SentenceType;
  sentenceId: string;
}

