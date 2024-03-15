
import { useNavigate } from 'react-router-dom';
import React from "react";
import {FaqBoard} from "~/components/faq/FaqBoard/FaqBoard";


export const FaqBoardPage = () => {
    //
    const navigate = useNavigate();
    const handleNewFaqPost = () => navigate(`post/new`);

    return (
        <FaqBoard onNewPost ={handleNewFaqPost}/>
    );
};

