import { CommandRequest } from '@vizendjs/accent';


export interface RegisterBulletinCommentCommand extends CommandRequest {
  text?: string;
  postId?: string;
}

