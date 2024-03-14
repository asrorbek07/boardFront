import { CommandRequest } from '@vizendjs/accent';


export interface RemoveBulletinCommentCommand extends CommandRequest {
  commentId?: string;
}

