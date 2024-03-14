import { CommandRequest, NameValueList } from '@vizendjs/accent';


export interface ModifyQnaReplyCommand extends CommandRequest {
  replyId?: string;
  nameValueList?: NameValueList;
}

