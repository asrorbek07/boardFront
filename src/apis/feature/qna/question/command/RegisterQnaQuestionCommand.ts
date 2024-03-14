import { CommandRequest } from '@vizendjs/accent';
import { CommentRule } from '~/models';


export interface RegisterQnaQuestionCommand extends CommandRequest {
  title?: string;
  content?: string;
  boardId?: string;
  commentRule?: CommentRule;
}

