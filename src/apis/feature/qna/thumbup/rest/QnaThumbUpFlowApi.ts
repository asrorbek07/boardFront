import { CommandResponse } from '@vizendjs/accent';
import axios from 'axios';
import { ToggleQnaThumbUpCommand } from '../command';
import {SentenceType} from "~/models";


const url = (path: string) => `/api/board/feature/qna/thumbup${path}`;

const toggleQnaThumbUp = (variables: { sentenceType?: keyof typeof SentenceType, sentenceId?: string }) => {
  const command = <ToggleQnaThumbUpCommand>{ ...variables };
  return axios.post<CommandResponse>(url('/toggle-qna-thumb-up/command'), command);
};

export default {
  toggleQnaThumbUp,
};

