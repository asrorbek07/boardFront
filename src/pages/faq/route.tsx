import {Outlet, RouteObject} from 'react-router-dom';
import {Layout} from '~/layouts';
import {IndexPage} from '~/pages/faq/index';
import {NewFaqPostPage} from './faqPost/new';
import {FaqBoardCreatePage} from './faqBoard/FaqBoardCreatePage';
import {FaqBoardListPage} from "~/pages/faq/faqBoard/FaqBoardListPage";
import {FaqBoardPage} from "~/pages/faq/faqBoard/FaqBoardPage";

export const route: RouteObject = {
    path: 'faq',
    element: <Layout/>,
    handle: {
        type: "menu",
        title: 'Faq',
        withoutAuth: true,
    },
    children: [
        {
            index: true,
            element: <IndexPage/>,
        },
        {
            path: 'boards',
            element: <Outlet/>,
            handle: {
                title: 'FAQ Board',
            },
            children: [
                {
                    path: '',
                    element: <FaqBoardListPage/>,
                    handle: {
                        title: 'FAQ Board List',
                        type: "none",
                    },
                },
                {
                    path: 'new',
                    element: <FaqBoardCreatePage/>,
                    handle: {
                        title: 'New FAQ Board',
                        type: "none",
                    },
                },
                {
                    path: ':boardId',

                    element: <FaqBoardPage/>,
                    handle: {
                        title: 'FAQ Board',
                        type: "none",
                    },
                },
            ],
        },
        {
            path: 'post',
            element: <Outlet/>,
            handle: {
                title: 'FAQ Post',
            },
            children: [
                {
                    path: 'new',
                    element: <NewFaqPostPage/>,
                    handle: {
                        title: 'New FAQ Post',
                        type: "none",
                    },
                },
            ],
        },
    ],
};
