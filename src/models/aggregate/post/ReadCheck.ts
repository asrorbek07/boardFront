import { StageEntity, IdName } from '@vizendjs/accent';


export interface ReadCheck extends StageEntity {
  readonly reader: IdName;
  readonly postId: string;
}

export const ReadCheckUpdatable = [] as const;

