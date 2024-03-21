import { CommandResponse } from '@vizendjs/accent';
import axios from 'axios';
import { ToggleBulletinThumbUpCommand } from '../command';
import {SentenceType} from "~/models";


const url = (path: string) => `/api/board/feature/bulletin/thumbup${path}`;

const toggleBulletinThumbUp = (variables: { sentenceType?: keyof typeof SentenceType, sentenceId?: string }) => {
  const command = <ToggleBulletinThumbUpCommand>{ ...variables };
  return axios.post<CommandResponse>(url('/toggle-bulletin-thumb-up/command'), command);
};

export default {
  toggleBulletinThumbUp,
};

