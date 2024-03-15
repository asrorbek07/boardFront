
import { useNavigate } from 'react-router-dom';
import React from "react";
import {FaqBoard} from "~/components/faq/FaqBoard/FaqBoard";
import {BulletinBoard} from "~/components";


export const BulletinBoardPage = () => {
    //
    const navigate = useNavigate();
    const handleNewBulletinPost = () => navigate(`post/new`);

    return (
        <BulletinBoard onNewPost ={handleNewBulletinPost}/>
    );
};

