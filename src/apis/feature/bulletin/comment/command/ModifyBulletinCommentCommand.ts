import { CommandRequest, NameValueList } from '@vizendjs/accent';


export interface ModifyBulletinCommentCommand extends CommandRequest {
  commentId?: string;
  nameValueList?: NameValueList;
}

