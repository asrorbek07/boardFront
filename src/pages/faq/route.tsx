import {RouteObject} from 'react-router-dom';
import {Layout} from '~/layouts';
import {FaqMainPage} from "~/pages/faq/FaqMainPage";

export const route: RouteObject = {
    path: 'faq',
    element: <Layout/>,
    handle: {
        type: "menu",
        title: 'FAQ',
        withoutAuth: true,
    },
    children: [
        {
            path:"",
            element: <FaqMainPage/>,
            handle: {
                title: "Faq Board",
            },
        },
    ],
};
