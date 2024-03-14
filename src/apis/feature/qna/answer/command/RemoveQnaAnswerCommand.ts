import { CommandRequest } from '@vizendjs/accent';


export interface RemoveQnaAnswerCommand extends CommandRequest {
  answerId?: string;
}

