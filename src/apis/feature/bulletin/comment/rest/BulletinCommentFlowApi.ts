import { CommandResponse, NameValueList } from '@vizendjs/accent';
import axios from 'axios';
import { RegisterBulletinCommentCommand, ModifyBulletinCommentCommand, RemoveBulletinCommentCommand } from '../command';


const url = (path: string) => `/api/board/feature/bulletin/comment${path}`;

const registerBulletinComment = (variables: { text?: string, postId?: string }) => {
  const command = <RegisterBulletinCommentCommand>{ ...variables };
  return axios.post<CommandResponse>(url('/register-bulletin-comment/command'), command);
};

const modifyBulletinComment = (variables: { commentId?: string, nameValueList?: NameValueList }) => {
  const command = <ModifyBulletinCommentCommand>{ ...variables };
  return axios.post<CommandResponse>(url('/modify-bulletin-comment/command'), command);
};

const removeBulletinComment = (variables: { commentId?: string }) => {
  const command = <RemoveBulletinCommentCommand>{ ...variables };
  return axios.post<CommandResponse>(url('/remove-bulletin-comment/command'), command);
};

export default {
  registerBulletinComment,
  modifyBulletinComment,
  removeBulletinComment,
};

