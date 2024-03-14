import { CreationDataObject } from '@vizendjs/accent';
import { SentenceType } from '~/models';


export interface BulletinThumbUpRecordCdo extends CreationDataObject {
  sentenceType: keyof typeof SentenceType;
  sentenceId: string;
}

