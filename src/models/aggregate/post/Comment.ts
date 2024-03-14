import { StageEntity } from '@vizendjs/accent';


export interface Comment extends StageEntity {
  readonly text: string;
  readonly displayName: string;
  readonly accepted?: boolean;
  readonly postId: string;
}

export const CommentUpdatable = [] as const;

