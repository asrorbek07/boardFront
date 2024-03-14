import { CommandResponse, NameValueList } from '@vizendjs/accent';
import axios from 'axios';
import { RegisterBulletinReplyCommand, ModifyBulletinReplyCommand, RemoveBulletinReplyCommand } from '../command';


const url = (path: string) => `/api/board/feature/bulletin/reply${path}`;

const registerBulletinReply = (variables: { text?: string, commentId?: string }) => {
  const command = <RegisterBulletinReplyCommand>{ ...variables };
  return axios.post<CommandResponse>(url('/register-bulletin-reply/command'), command);
};

const modifyBulletinReply = (variables: { replyId?: string, nameValueList?: NameValueList }) => {
  const command = <ModifyBulletinReplyCommand>{ ...variables };
  return axios.post<CommandResponse>(url('/modify-bulletin-reply/command'), command);
};

const removeBulletinReply = (variables: { replyId?: string }) => {
  const command = <RemoveBulletinReplyCommand>{ ...variables };
  return axios.post<CommandResponse>(url('/remove-bulletin-reply/command'), command);
};

export default {
  registerBulletinReply,
  modifyBulletinReply,
  removeBulletinReply,
};

