import { CommandResponse, NameValueList } from '@vizendjs/accent';
import axios from 'axios';
import { RegisterQnaAnswerCommand, ModifyQnaAnswerCommand, RemoveQnaAnswerCommand } from '../command';


const url = (path: string) => `/api/board/feature/qna/answer${path}`;

const registerQnaAnswer = (variables: { text?: string, questionId?: string }) => {
  const command = <RegisterQnaAnswerCommand>{ ...variables };
  return axios.post<CommandResponse>(url('/register-qna-answer/command'), command);
};

const modifyQnaAnswer = (variables: { answerId?: string, nameValueList?: NameValueList }) => {
  const command = <ModifyQnaAnswerCommand>{ ...variables };
  return axios.post<CommandResponse>(url('/modify-qna-answer/command'), command);
};

const removeQnaAnswer = (variables: { answerId?: string }) => {
  const command = <RemoveQnaAnswerCommand>{ ...variables };
  return axios.post<CommandResponse>(url('/remove-qna-answer/command'), command);
};

export default {
  registerQnaAnswer,
  modifyQnaAnswer,
  removeQnaAnswer,
};

