import { CommandResponse, NameValueList } from '@vizendjs/accent';
import axios from 'axios';
import { ModifyFaqBoardCommand, RegisterFaqBoardCommand, RemoveFaqBoardCommand } from '../command';


const url = (path: string) => `/api/board/feature/faq/board${path}`;

const modifyFaqBoard = (variables: { boardId?: string, nameValueList?: NameValueList }) => {
  const command = <ModifyFaqBoardCommand>{ ...variables };
  return axios.post<CommandResponse>(url('/modify-faq-board/command'), command);
};

const registerFaqBoard = (variables: { title?: string, description?: string }) => {
  const command = <RegisterFaqBoardCommand>{ ...variables };
  return axios.post<CommandResponse>(url('/register-faq-board/command'), command);
};

const removeFaqBoard = (variables: { boardId?: string }) => {
  const command = <RemoveFaqBoardCommand>{ ...variables };
  return axios.post<CommandResponse>(url('/remove-faq-board/command'), command);
};

export default {
  modifyFaqBoard,
  registerFaqBoard,
  removeFaqBoard,
};

