import { CommandRequest } from '@vizendjs/accent';


export interface RemoveFaqBoardCommand extends CommandRequest {
  boardId?: string;
}

