import { StageEntity } from '@vizendjs/accent';


export interface BoardSequence extends StageEntity {
  readonly entityName: string;
  readonly sequence?: number;
}

export const BoardSequenceUpdatable = [] as const;

