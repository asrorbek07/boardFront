import { CreationDataObject } from '@vizendjs/accent';
import { BoardType, BoardPolicy } from '~/models';


export interface BoardCdo extends CreationDataObject {
  title: string;
  description: string;
  boardType: keyof typeof BoardType;
  boardPolicy: BoardPolicy;
  sequence: number;
}

