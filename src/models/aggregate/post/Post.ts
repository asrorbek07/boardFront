import { StageEntity } from '@vizendjs/accent';
import { PostState, CommentRule } from '~/models';


export interface Post extends StageEntity {
  readonly sequence?: number;
  readonly title: string;
  readonly displayName: string;
  readonly content: string;
  readonly postState: keyof typeof PostState;
  readonly commentRule: CommentRule;
  readonly boardId: string;
}

export const PostUpdatable = [] as const;

