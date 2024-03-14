import { CommandRequest, NameValueList } from '@vizendjs/accent';


export interface ModifyQnaBoardCommand extends CommandRequest {
  boardId?: string;
  nameValueList?: NameValueList;
}

