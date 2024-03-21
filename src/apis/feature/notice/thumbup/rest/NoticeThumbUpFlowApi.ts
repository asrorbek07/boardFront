import { CommandResponse } from '@vizendjs/accent';
import axios from 'axios';
import { ToggleNoticeThumbUpCommand } from '../command';
import {SentenceType} from "~/models";


const url = (path: string) => `/api/board/feature/notice/thumbup${path}`;

const toggleNoticeThumbUp = (variables: { sentenceType?: keyof typeof SentenceType, sentenceId?: string }) => {
  const command = <ToggleNoticeThumbUpCommand>{ ...variables };
  return axios.post<CommandResponse>(url('/toggle-notice-thumb-up/command'), command);
};

export default {
  toggleNoticeThumbUp,
};

