
import { useNavigate } from 'react-router-dom';
import React from "react";
import {BulletinPost} from "~/components/bulletin/BulletinPost/BulletinPost";


export const BulletinPostPage = () => {
    //
    const navigate = useNavigate();
    const handleNewBulletinComment = () => navigate(`comment/new`);
    const handleBulletinPostModify = () => navigate(`modify`);

    return (
        <BulletinPost onNewComment ={handleNewBulletinComment} onModifyPost={handleBulletinPostModify}/>
    );
};

