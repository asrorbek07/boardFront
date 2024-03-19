import {BoardList,} from '~/components';

import { useNavigate } from 'react-router-dom';
import React from "react";


export const NoticeBoardListPage = () => {
    //
    const navigate = useNavigate();
    const handleNewNoticeBoard = () => navigate(`new`);

    return (
        <BoardList onNewBoard={handleNewNoticeBoard}/>
    );
};

