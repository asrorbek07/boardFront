import { CommandRequest } from '@vizendjs/accent';


export interface RegisterNoticeBoardCommand extends CommandRequest {
  title?: string;
  description?: string;
}

