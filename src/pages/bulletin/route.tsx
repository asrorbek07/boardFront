import { Outlet, RouteObject } from "react-router-dom";
import { Layout } from "~/layouts";
import { IndexPage } from "~/pages/bulletin/IndexPage";

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
  ],
};
