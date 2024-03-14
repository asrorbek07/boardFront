import { CommandResponse, NameValueList } from '@vizendjs/accent';
import axios from 'axios';
import { RegisterBulletinBoardCommand, ModifyBulletinBoardCommand, RemoveBulletinBoardCommand } from '../command';


const url = (path: string) => `/api/board/feature/bulletin/board${path}`;

const registerBulletinBoard = (variables: { title?: string, description?: string }) => {
  const command = <RegisterBulletinBoardCommand>{ ...variables };
  return axios.post<CommandResponse>(url('/register-bulletin-board/command'), command);
};

const modifyBulletinBoard = (variables: { boardId?: string, nameValueList?: NameValueList }) => {
  const command = <ModifyBulletinBoardCommand>{ ...variables };
  return axios.post<CommandResponse>(url('/modify-bulletin-board/command'), command);
};

const removeBulletinBoard = (variables: { boardId?: string }) => {
  const command = <RemoveBulletinBoardCommand>{ ...variables };
  return axios.post<CommandResponse>(url('/remove-bulletin-board/command'), command);
};

export default {
  registerBulletinBoard,
  modifyBulletinBoard,
  removeBulletinBoard,
};

