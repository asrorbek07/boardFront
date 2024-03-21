import { createBrowserRouter } from "react-router-dom";
import { IndexPage } from "./index";
import { kollection } from "~/index";
import { route as bulletinRoute } from "./bulletin/route";
import { route as faqRoute } from "./faq/route";
import { route as noticeRoute } from "./notice/route";
import { route as qnaRoute } from "./qna/route";


export const browserRouter = createBrowserRouter(
  [
      {
          index: true,
          element: <IndexPage />,
      },
      bulletinRoute,
      faqRoute,
      noticeRoute,
      qnaRoute,
  ],
  {
    basename: `/${kollection}`,
  }
);
