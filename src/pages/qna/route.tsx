import {RouteObject} from 'react-router-dom';
import {Layout} from '~/layouts';
import {QnaMainPage} from "~/pages/qna/QnaMainPage";

export const route: RouteObject = {
    path: 'qna',
    element: <Layout/>,
    handle: {
        type: "menu",
        title: 'QNA',
        withoutAuth: true,
    },
    children: [
        {
            path:"",
            element: <QnaMainPage/>,
            handle: {
                title: "Qna Board",
            },
        },
    ],
};
