import { CommandRequest } from '@vizendjs/accent';


export interface RegisterFaqPostCommand extends CommandRequest {
  title?: string;
  content?: string;
  boardId?: string;
}

