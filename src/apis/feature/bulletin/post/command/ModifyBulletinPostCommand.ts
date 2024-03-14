import { CommandRequest, NameValueList } from '@vizendjs/accent';


export interface ModifyBulletinPostCommand extends CommandRequest {
  postId?: string;
  nameValueList?: NameValueList;
}

