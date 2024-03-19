import {Outlet, RouteObject} from 'react-router-dom';
import {Layout} from '~/layouts';
import {FaqBoardListPage} from "~/pages/faq/faqBoard/FaqBoardListPage";
import {FaqBoardPage} from "~/pages/faq/faqBoard/FaqBoardPage";
import {IndexPage} from "~/pages/notice/index";
import {FaqBoardCreatePage} from "~/pages/faq/faqBoard/FaqBoardCreatePage";
import {NewFaqPostPage} from "~/pages/faq/faqPost/new";

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
            index: true,
            element: <IndexPage/>,
        },
        {
            path: 'board',
            element: <Outlet/>,
            handle: {
                title: 'Notice Board',
            },
            children: [
                {
                    path: '',
                    element: <FaqBoardListPage/>,
                    handle: {
                        title: 'Notice Board List',
                        type: "none",
                    },
                },
                {
                    path: 'new',
                    element: <FaqBoardCreatePage/>,
                    handle: {
                        title: 'New Notice Board',
                        type: "none",
                    },
                },
                {
                    path: ':boardId',

                    element: <Outlet/>,
                    handle: {
                        title: 'FAQ Board',
                        type: "none",
                    },
                    children:[
                        {
                            path:"",
                            element: <FaqBoardPage/>,
                            handle: {
                                title: 'FAQ Board and Post List',
                                type: "none",
                            },
                        },
                        {
                         path:'post/new',
                         element:<NewFaqPostPage/>,
                         handle:{
                             title:'New FAQ Post',
                             type:'none',
                         }
                        },
                    ],
                },
            ],
        },
    ],
};
