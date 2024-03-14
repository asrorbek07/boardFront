import { StageEntity } from '@vizendjs/accent';
import { BoardType, BoardPolicy } from '~/models';


export interface Board extends StageEntity {
  readonly title: string;
  readonly description: string;
  readonly boardType: keyof typeof BoardType;
  readonly boardPolicy: BoardPolicy;
  readonly postSequence?: number;
}

export const BoardUpdatable = [] as const;

