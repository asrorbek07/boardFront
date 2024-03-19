import { Outlet, RouteObject } from "react-router-dom";
import { Layout } from "~/layouts";
import { IndexPage } from "~/pages/bulletin";
import { BulletinBoardModifyPage } from "~/pages/bulletin/bulletinBoard/BulletinBoardModifyPage";
import { BulletinPostCreatePage } from "~/pages/bulletin/bulletinPost/BulletinPostCreatePage";

export const route: RouteObject = {
  path: "bulletin",
  element: <Layout />,
  handle: {
    type: "menu",
    title: "Bulletin",
    withoutAuth: true,
  },
  children: [
    {
      path: "",
      element: <IndexPage />,
      handle: {
        title: "Bulletin Board",
      },
    },
    {
      path: ":boardId/post/new",
      element: <BulletinPostCreatePage />,
      handle: {
        title: "New Bulletin Post",
        type: "none",
      },
    },
    {
      path: ":boardId/modify",

      element: <BulletinBoardModifyPage />,
      handle: {
        title: "Bulletin Board Modify",
        type: "none",
      },
    },
  ],
};
