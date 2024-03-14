import { CommandRequest } from '@vizendjs/accent';


export interface RegisterBulletinBoardCommand extends CommandRequest {
  title?: string;
  description?: string;
}

