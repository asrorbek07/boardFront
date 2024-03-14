import { CommandRequest } from '@vizendjs/accent';


export interface RemoveBulletinBoardCommand extends CommandRequest {
  boardId?: string;
}

