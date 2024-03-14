import { CommandResponse, NameValueList } from '@vizendjs/accent';
import axios from 'axios';
import { RegisterQnaReplyCommand, ModifyQnaReplyCommand, RemoveQnaReplyCommand } from '../command';


const url = (path: string) => `/api/board/feature/qna/reply${path}`;

const registerQnaReply = (variables: { text?: string, commentId?: string }) => {
  const command = <RegisterQnaReplyCommand>{ ...variables };
  return axios.post<CommandResponse>(url('/register-qna-reply/command'), command);
};

const modifyQnaReply = (variables: { replyId?: string, nameValueList?: NameValueList }) => {
  const command = <ModifyQnaReplyCommand>{ ...variables };
  return axios.post<CommandResponse>(url('/modify-qna-reply/command'), command);
};

const removeQnaReply = (variables: { replyId?: string }) => {
  const command = <RemoveQnaReplyCommand>{ ...variables };
  return axios.post<CommandResponse>(url('/remove-qna-reply/command'), command);
};

export default {
  registerQnaReply,
  modifyQnaReply,
  removeQnaReply,
};

