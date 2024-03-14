import { CommandRequest, NameValueList } from '@vizendjs/accent';


export interface ModifyFaqBoardCommand extends CommandRequest {
  boardId?: string;
  nameValueList?: NameValueList;
}

