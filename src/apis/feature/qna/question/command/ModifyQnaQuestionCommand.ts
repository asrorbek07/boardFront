import { CommandRequest, NameValueList } from '@vizendjs/accent';


export interface ModifyQnaQuestionCommand extends CommandRequest {
  questionId?: string;
  nameValueList?: NameValueList;
}

