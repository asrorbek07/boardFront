import { StageEntity, IdName } from '@vizendjs/accent';
import { SentenceType } from '~/models';


export interface ThumbUpRecord extends StageEntity {
  readonly reader: IdName;
  readonly sentenceType: keyof typeof SentenceType;
  readonly sentenceId: string;
}

export const ThumbUpRecordUpdatable = [] as const;

