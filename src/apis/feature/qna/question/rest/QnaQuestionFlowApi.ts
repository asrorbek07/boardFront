import { CommandResponse, NameValueList } from '@vizendjs/accent';
import axios from 'axios';
import { CommentRule } from '~/models';
import { RegisterQnaQuestionCommand, ModifyQnaQuestionCommand, RemoveQnaQuestionCommand } from '../command';


const url = (path: string) => `/api/board/feature/qna/question${path}`;

const registerQnaQuestion = (variables: { title?: string, content?: string, boardId?: string, commentRule?: CommentRule }) => {
  const command = <RegisterQnaQuestionCommand>{ ...variables };
  return axios.post<CommandResponse>(url('/register-qna-question/command'), command);
};

const modifyQnaQuestion = (variables: { questionId?: string, nameValueList?: NameValueList }) => {
  const command = <ModifyQnaQuestionCommand>{ ...variables };
  return axios.post<CommandResponse>(url('/modify-qna-question/command'), command);
};

const removeQnaQuestion = (variables: { questionId?: string }) => {
  const command = <RemoveQnaQuestionCommand>{ ...variables };
  return axios.post<CommandResponse>(url('/remove-qna-question/command'), command);
};

export default {
  registerQnaQuestion,
  modifyQnaQuestion,
  removeQnaQuestion,
};

