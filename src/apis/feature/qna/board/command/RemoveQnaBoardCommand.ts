import { CommandRequest } from '@vizendjs/accent';


export interface RemoveQnaBoardCommand extends CommandRequest {
  boardId?: string;
}

