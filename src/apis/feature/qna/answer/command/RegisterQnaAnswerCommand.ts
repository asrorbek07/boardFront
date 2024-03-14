import { CommandRequest } from '@vizendjs/accent';


export interface RegisterQnaAnswerCommand extends CommandRequest {
  text?: string;
  questionId?: string;
}

