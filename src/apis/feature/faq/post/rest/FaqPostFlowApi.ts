import { CommandResponse, NameValueList } from '@vizendjs/accent';
import axios from 'axios';
import { RegisterFaqPostCommand, RemoveFaqPostCommand, ModifyFaqPostCommand } from '../command';


const url = (path: string) => `/api/board/feature/faq/post${path}`;

const registerFaqPost = (variables: { title?: string, content?: string, boardId?: string }) => {
  const command = <RegisterFaqPostCommand>{ ...variables };
  return axios.post<CommandResponse>(url('/register-faq-post/command'), command);
};

const removeFaqPost = (variables: { postId?: string }) => {
  const command = <RemoveFaqPostCommand>{ ...variables };
  return axios.post<CommandResponse>(url('/remove-faq-post/command'), command);
};

const modifyFaqPost = (variables: { postId?: string, nameValueList?: NameValueList }) => {
  const command = <ModifyFaqPostCommand>{ ...variables };
  return axios.post<CommandResponse>(url('/modify-faq-post/command'), command);
};

export default {
  registerFaqPost,
  removeFaqPost,
  modifyFaqPost,
};

