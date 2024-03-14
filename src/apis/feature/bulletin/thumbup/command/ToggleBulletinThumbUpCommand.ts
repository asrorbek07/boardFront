import { CommandRequest } from '@vizendjs/accent';
import { SentenceType } from '~/models';


export interface ToggleBulletinThumbUpCommand extends CommandRequest {
  sentenceType?: typeof SentenceType;
  sentenceId?: string;
}

