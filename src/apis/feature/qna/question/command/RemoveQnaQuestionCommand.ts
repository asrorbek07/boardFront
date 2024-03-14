import { CommandRequest } from '@vizendjs/accent';


export interface RemoveQnaQuestionCommand extends CommandRequest {
  questionId?: string;
}

