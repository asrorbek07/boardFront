import * as React from 'react';
import {BulletinBoardItem, FaqBoardItem, useFaqBoardList,} from "~/components";
import List from '@mui/material/List';
import {Board} from "~/models";
export const BoardList = (
    {
        boards,
        onClickBoard,
    }: {
        boards:Board[];
        onClickBoard:(boardId)=> void;
    }
) => {

    return null;

};

