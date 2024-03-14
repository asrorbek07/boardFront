import { CommandRequest } from '@vizendjs/accent';


export interface ToggleQnaThumbUpCommand extends CommandRequest {
  sentenceType?: string;
  sentenceId?: string;
}

