import { CommandRequest, NameValueList } from '@vizendjs/accent';


export interface ModifyBulletinReplyCommand extends CommandRequest {
  replyId?: string;
  nameValueList?: NameValueList;
}

