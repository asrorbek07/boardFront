import {FaqBoardList, NewFaqBoard} from '~/components';

import { useNavigate } from 'react-router-dom';
import React from "react";


export const FaqBoardListPage = () => {
    //
    const navigate = useNavigate();
    const handleNewFaqBoard = () => navigate(`new`);

    return (
        <FaqBoardList onNewBoard={handleNewFaqBoard}/>
    );
};

