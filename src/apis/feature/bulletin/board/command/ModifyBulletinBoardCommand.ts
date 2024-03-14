import { CommandRequest, NameValueList } from '@vizendjs/accent';


export interface ModifyBulletinBoardCommand extends CommandRequest {
  boardId?: string;
  nameValueList?: NameValueList;
}

