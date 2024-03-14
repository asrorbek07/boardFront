import { CommandRequest } from '@vizendjs/accent';


export interface RemoveBulletinPostCommand extends CommandRequest {
  postId?: string;
}

