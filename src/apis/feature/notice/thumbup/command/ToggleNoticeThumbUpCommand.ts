import { CommandRequest } from '@vizendjs/accent';


export interface ToggleNoticeThumbUpCommand extends CommandRequest {
  sentenceType?: string;
  sentenceId?: string;
}

