import { CommandResponse } from '@vizendjs/accent';
import axios from 'axios';
import { ToggleQnaThumbUpCommand } from '../command';


const url = (path: string) => `/api/board/feature/qna/thumbup${path}`;

const toggleQnaThumbUp = (variables: { sentenceType?: string, sentenceId?: string }) => {
  const command = <ToggleQnaThumbUpCommand>{ ...variables };
  return axios.post<CommandResponse>(url('/toggle-qna-thumb-up/command'), command);
};

export default {
  toggleQnaThumbUp,
};

