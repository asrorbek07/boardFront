import { CommandRequest } from '@vizendjs/accent';


export interface RegisterBulletinReplyCommand extends CommandRequest {
  text?: string;
  commentId?: string;
}

