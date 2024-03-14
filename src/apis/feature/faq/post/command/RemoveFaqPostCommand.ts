import { CommandRequest } from '@vizendjs/accent';


export interface RemoveFaqPostCommand extends CommandRequest {
  postId?: string;
}

