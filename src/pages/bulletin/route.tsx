import {Outlet, RouteObject} from 'react-router-dom';
import {Layout} from '~/layouts';
import {IndexPage} from '~/pages/bulletin';
import {BulletinBoardCreatePage} from "~/pages/bulletin/bulletinBoard/BulletinBoardCreatePage";
import {BulletinBoardPage} from "~/pages/bulletin/bulletinBoard/BulletinBoardPage";
import {NewBulletinPostPage} from "~/pages/bulletin/bulletinPost/NewBulletinPostPage";
import {BulletinBoardListPage} from "~/pages/bulletin/bulletinBoard/BulletinBoardListPage";

export const route: RouteObject = {
    path: 'bulletin',
    element: <Layout/>,
    handle: {
        type: "menu",
        title: 'Bulletin',
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
                title: 'Bulletin Board',
            },
            children: [
                {
                    path: '',
                    element: <BulletinBoardListPage/>,
                    handle: {
                        title: 'Bulletin Board List',
                        type: "none",
                    },
                },
                {
                    path: 'new',
                    element: <BulletinBoardCreatePage/>,
                    handle: {
                        title: 'New Bulletin Board',
                        type: "none",
                    },
                },
                {
                    path: ':boardId',

                    element: <Outlet/>,
                    handle: {
                        title: 'Bulletin Board',
                        type: "none",
                    },
                    children:[
                        {
                            path:"",
                            element: <BulletinBoardPage/>,
                            handle: {
                                title: 'Bulletin Board and Post List',
                                type: "none",
                            },
                        },
                        {
                         path:'post/new',
                         element:<NewBulletinPostPage/>,
                         handle:{
                             title:'New Bulletin Post',
                             type:'none',
                         }
                        },

                    ],
                },
            ],
        },
    ],
};
