import { CommandRequest } from '@vizendjs/accent';


export interface RemoveNoticePostCommand extends CommandRequest {
  postId?: string;
}

