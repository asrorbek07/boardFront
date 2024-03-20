import {RouteObject} from 'react-router-dom';
import {Layout} from '~/layouts';
import {NoticeMainPage} from "~/pages/notice/NoticeMainPage";

export const route: RouteObject = {
    path: 'notice',
    element: <Layout/>,
    handle: {
        type: "menu",
        title: 'Notice',
        withoutAuth: true,
    },
    children: [
        {
            path:"",
            element: <NoticeMainPage/>,
            handle: {
                title: "Notice Board",
            },
        },
    ],
};
