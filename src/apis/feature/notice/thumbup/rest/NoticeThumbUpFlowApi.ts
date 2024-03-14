import { CommandResponse } from '@vizendjs/accent';
import axios from 'axios';
import { ToggleNoticeThumbUpCommand } from '../command';


const url = (path: string) => `/api/board/feature/notice/thumbup${path}`;

const toggleNoticeThumbUp = (variables: { sentenceType?: string, sentenceId?: string }) => {
  const command = <ToggleNoticeThumbUpCommand>{ ...variables };
  return axios.post<CommandResponse>(url('/toggle-notice-thumb-up/command'), command);
};

export default {
  toggleNoticeThumbUp,
};

