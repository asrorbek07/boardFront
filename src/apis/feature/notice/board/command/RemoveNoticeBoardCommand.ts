import { CommandRequest } from '@vizendjs/accent';


export interface RemoveNoticeBoardCommand extends CommandRequest {
  boardId?: string;
}

