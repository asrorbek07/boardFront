import { CommandRequest, NameValueList } from '@vizendjs/accent';


export interface ModifyNoticePostCommand extends CommandRequest {
  postId?: string;
  nameValueList?: NameValueList;
}

