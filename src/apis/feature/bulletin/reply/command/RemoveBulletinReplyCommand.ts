import { CommandRequest } from '@vizendjs/accent';


export interface RemoveBulletinReplyCommand extends CommandRequest {
  replyId?: string;
}

