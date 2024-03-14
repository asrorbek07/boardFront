import { CommandRequest, NameValueList } from '@vizendjs/accent';


export interface ModifyQnaAnswerCommand extends CommandRequest {
  answerId?: string;
  nameValueList?: NameValueList;
}

