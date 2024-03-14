import { StageEntity } from '@vizendjs/accent';


export interface Reply extends StageEntity {
  readonly text: string;
  readonly displayName: string;
  readonly commentId: string;
}

export const ReplyUpdatable = [] as const;

