import { CommandRequest } from '@vizendjs/accent';


export interface RegisterFaqBoardCommand extends CommandRequest {
  title?: string;
  description?: string;
}

