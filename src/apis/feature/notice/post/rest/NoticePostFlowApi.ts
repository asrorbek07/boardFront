import { CommandResponse, NameValueList } from '@vizendjs/accent';
import axios from 'axios';
import { RegisterNoticePostCommand, ModifyNoticePostCommand, RemoveNoticePostCommand } from '../command';


const url = (path: string) => `/api/board/feature/notice/post${path}`;

const registerNoticePost = (variables: { title?: string, content?: string, boardId?: string }) => {
  const command = <RegisterNoticePostCommand>{ ...variables };
  return axios.post<CommandResponse>(url('/register-notice-post/command'), command);
};

const modifyNoticePost = (variables: { postId?: string, nameValueList?: NameValueList }) => {
  const command = <ModifyNoticePostCommand>{ ...variables };
  return axios.post<CommandResponse>(url('/modify-notice-post/command'), command);
};

const removeNoticePost = (variables: { postId?: string }) => {
  const command = <RemoveNoticePostCommand>{ ...variables };
  return axios.post<CommandResponse>(url('/remove-notice-post/command'), command);
};

export default {
  registerNoticePost,
  modifyNoticePost,
  removeNoticePost,
};

