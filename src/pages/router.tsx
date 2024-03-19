import { createBrowserRouter } from "react-router-dom";
import { IndexPage } from "./index";
import { kollection } from "~/index";
import { route as faqRoute } from "./faq/route";
import { route as bulletinRoute } from "./bulletin/route";

export const browserRouter = createBrowserRouter(
  [
    {
      index: true,
      element: <IndexPage />,
    },
    faqRoute,
    bulletinRoute,
  ],
  {
    basename: `/${kollection}`,
  }
);
