import { CommandRequest } from '@vizendjs/accent';


export interface RegisterQnaReplyCommand extends CommandRequest {
  text?: string;
  commentId?: string;
}

