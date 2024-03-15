import {BulletinBoardList,} from '~/components';

import { useNavigate } from 'react-router-dom';
import React from "react";


export const BulletinBoardListPage = () => {
    //
    const navigate = useNavigate();
    const handleNewBulletinBoard = () => navigate(`new`);

    return (
        <BulletinBoardList onNewBoard={handleNewBulletinBoard}/>
    );
};

