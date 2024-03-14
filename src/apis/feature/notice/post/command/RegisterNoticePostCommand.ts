import { CommandRequest } from '@vizendjs/accent';


export interface RegisterNoticePostCommand extends CommandRequest {
  title?: string;
  content?: string;
  boardId?: string;
}

