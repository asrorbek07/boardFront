import { CreationDataObject } from '@vizendjs/accent';
import { CommentRule } from '~/models';


export interface BulletinPostCdo extends CreationDataObject {
  title: string;
  content: string;
  boardId: string;
  commentRule: CommentRule;
}

