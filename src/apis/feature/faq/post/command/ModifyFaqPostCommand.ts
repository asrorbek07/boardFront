import { CommandRequest, NameValueList } from '@vizendjs/accent';


export interface ModifyFaqPostCommand extends CommandRequest {
  postId?: string;
  nameValueList?: NameValueList;
}

