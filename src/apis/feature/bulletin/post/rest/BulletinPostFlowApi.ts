import { CommandResponse, NameValueList } from '@vizendjs/accent';
import axios from 'axios';
import { CommentRule } from '~/models';
import { RegisterBulletinPostCommand, ModifyBulletinPostCommand, RemoveBulletinPostCommand } from '../command';


const url = (path: string) => `/api/board/feature/bulletin/post${path}`;

const registerBulletinPost = (variables: { title?: string, content?: string, boardId?: string, commentRule?: CommentRule }) => {
  const command = <RegisterBulletinPostCommand>{ ...variables };
  return axios.post<CommandResponse>(url('/register-bulletin-post/command'), command);
};

const modifyBulletinPost = (variables: { postId?: string, nameValueList?: NameValueList }) => {
  const command = <ModifyBulletinPostCommand>{ ...variables };
  return axios.post<CommandResponse>(url('/modify-bulletin-post/command'), command);
};

const removeBulletinPost = (variables: { postId?: string }) => {
  const command = <RemoveBulletinPostCommand>{ ...variables };
  return axios.post<CommandResponse>(url('/remove-bulletin-post/command'), command);
};

export default {
  registerBulletinPost,
  modifyBulletinPost,
  removeBulletinPost,
};

