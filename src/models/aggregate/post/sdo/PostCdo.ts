import { CreationDataObject } from '@vizendjs/accent';
import { CommentRule } from '~/models';


export interface PostCdo extends CreationDataObject {
  sequence: number;
  title: string;
  displayName: string;
  content: string;
  boardId: string;
  commentRule: CommentRule;
}

