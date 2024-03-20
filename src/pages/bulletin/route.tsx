import { RouteObject } from "react-router-dom";
import { Layout } from "~/layouts";
import { BulletinMainPage } from "~/pages/bulletin/BulletinMainPage";

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
      element: <BulletinMainPage />,
      handle: {
        title: "Bulletin Board",
      },
    },
  ],
};
