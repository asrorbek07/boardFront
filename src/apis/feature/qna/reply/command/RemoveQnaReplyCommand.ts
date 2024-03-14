import { CommandRequest } from '@vizendjs/accent';


export interface RemoveQnaReplyCommand extends CommandRequest {
  replyId?: string;
}

