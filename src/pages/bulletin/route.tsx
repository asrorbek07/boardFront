import {Outlet, RouteObject} from 'react-router-dom';
import {Layout} from '~/layouts';
import {IndexPage} from '~/pages/bulletin';
import {BulletinBoardCreatePage} from "~/pages/bulletin/bulletinBoard/BulletinBoardCreatePage";
import {BulletinBoardPage} from "~/pages/bulletin/bulletinBoard/BulletinBoardPage";
import {BulletinPostCreatePage} from "~/pages/bulletin/bulletinPost/BulletinPostCreatePage";
import {BulletinBoardListPage} from "~/pages/bulletin/bulletinBoard/BulletinBoardListPage";
import {BulletinPostPage} from "~/pages/bulletin/bulletinPost/BulletinPostPage";
import {BulletinCommentCreatePage} from "~/pages/bulletin/bulletinComment/BulletinCommentCreatePage";
import {BulletinBoardModifyPage} from "~/pages/bulletin/bulletinBoard/BulletinBoardModifyPage";
import {BulletinReplyCreatePage} from "~/pages/bulletin/bulletinReply/BulletinReplyCreatePage";
import {BulletinPostModifyPage} from "~/pages/bulletin/bulletinPost/BulletinPostModifyPage";

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
            path: 'board',
            element: <IndexPage/>,
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
                    path:'',
                    element: <BulletinBoardPage/>,
                    handle: {
                        title: 'Bulletin Board and Post List',
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
                    // children:[
                    //     {
                    //         path:"",
                    //         element: <BulletinBoardPage/>,
                    //         handle: {
                    //             title: 'Bulletin Board and Post List',
                    //             type: "none",
                    //         },
                    //     },
                    //     {
                    //      path:'post/new',
                    //      element:<BulletinPostCreatePage/>,
                    //      handle:{
                    //          title:'New Bulletin Post',
                    //          type:'none',
                    //      }
                    //
                    //     },
                    //     {
                    //         path:'modify',
                    //         element:<BulletinBoardModifyPage/>,
                    //         handle:{
                    //             title:'Modify Bulletin board',
                    //             type:'none',
                    //         }
                    //     },
                    //     {
                    //         path:'post/:postId',
                    //         element:<Outlet/>,
                    //         handle:{
                    //             title:'Bulletin Post',
                    //             type:'none',
                    //         },
                    //         children:[
                    //             {
                    //                 path:'',
                    //                 element:<BulletinPostPage/>,
                    //                 handle:{
                    //                     title:'Bulletin Post and Comment List',
                    //                     type:'none',
                    //                 }
                    //             },
                    //             {
                    //                 path:'modify',
                    //                 element:<BulletinPostModifyPage/>,
                    //                 handle:{
                    //                     title:'Modify Bulletin Comment',
                    //                     type:'none',
                    //                 }
                    //             },
                    //             {
                    //                 path:'comment/new',
                    //                 element:<BulletinCommentCreatePage/>,
                    //                 handle:{
                    //                     title:'New Bulletin Comment',
                    //                     type:'none',
                    //                 }
                    //             },
                    //             {
                    //                 path:'comment/:commentId/reply/new',
                    //                 element:<BulletinReplyCreatePage/>,
                    //                 handle:{
                    //                     title:'New Bulletin Comment',
                    //                     type:'none',
                    //                 }
                    //             },
                    //         ]
                    //     },
                    //
                    // ],
                },
            ],
        },
    ],
};
