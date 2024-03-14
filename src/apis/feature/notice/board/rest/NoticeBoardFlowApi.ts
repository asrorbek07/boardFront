import { CommandResponse, NameValueList } from '@vizendjs/accent';
import axios from 'axios';
import { RegisterNoticeBoardCommand, ModifyNoticeBoardCommand, RemoveNoticeBoardCommand } from '../command';


const url = (path: string) => `/api/board/feature/notice/board${path}`;

const registerNoticeBoard = (variables: { title?: string, description?: string }) => {
  const command = <RegisterNoticeBoardCommand>{ ...variables };
  return axios.post<CommandResponse>(url('/register-notice-board/command'), command);
};

const modifyNoticeBoard = (variables: { boardId?: string, nameValueList?: NameValueList }) => {
  const command = <ModifyNoticeBoardCommand>{ ...variables };
  return axios.post<CommandResponse>(url('/modify-notice-board/command'), command);
};

const removeNoticeBoard = (variables: { boardId?: string }) => {
  const command = <RemoveNoticeBoardCommand>{ ...variables };
  return axios.post<CommandResponse>(url('/remove-notice-board/command'), command);
};

export default {
  registerNoticeBoard,
  modifyNoticeBoard,
  removeNoticeBoard,
};

