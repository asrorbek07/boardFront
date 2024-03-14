import { CommandResponse, NameValueList } from '@vizendjs/accent';
import axios from 'axios';
import { RegisterQnaBoardCommand, ModifyQnaBoardCommand, RemoveQnaBoardCommand } from '../command';


const url = (path: string) => `/api/board/feature/qna/board${path}`;

const registerQanBoard = (variables: { title?: string, description?: string }) => {
  const command = <RegisterQnaBoardCommand>{ ...variables };
  return axios.post<CommandResponse>(url('/register-qna-board/command'), command);
};

const modifyQanBoard = (variables: { boardId?: string, nameValueList?: NameValueList }) => {
  const command = <ModifyQnaBoardCommand>{ ...variables };
  return axios.post<CommandResponse>(url('/modify-qna-board/command'), command);
};

const removeQanBoard = (variables: { boardId?: string }) => {
  const command = <RemoveQnaBoardCommand>{ ...variables };
  return axios.post<CommandResponse>(url('/remove-qna-board/command'), command);
};

export default {
  registerQanBoard,
  modifyQanBoard,
  removeQanBoard,
};

