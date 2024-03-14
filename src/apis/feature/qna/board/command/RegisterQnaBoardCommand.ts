import { CommandRequest } from '@vizendjs/accent';


export interface RegisterQnaBoardCommand extends CommandRequest {
  title?: string;
  description?: string;
}

