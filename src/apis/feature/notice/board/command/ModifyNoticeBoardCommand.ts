import { CommandRequest, NameValueList } from '@vizendjs/accent';


export interface ModifyNoticeBoardCommand extends CommandRequest {
  boardId?: string;
  nameValueList?: NameValueList;
}

