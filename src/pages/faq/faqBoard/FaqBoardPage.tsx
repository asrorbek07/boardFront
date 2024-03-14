
import { useNavigate } from 'react-router-dom';
import React from "react";
import {FaqBoard} from "~/components/faq/FaqBoard/FaqBoard";


export const FaqBoardPage = () => {
    //
    const navigate = useNavigate();
    const handleFaqBoard = () => navigate(`board`);

    return (
        <FaqBoard/>
    );
};

