import {createBrowserRouter} from 'react-router-dom';
import {IndexPage} from './index';
import {kollection} from '~/index';
import {route as faqRoute} from './faq/route';

export const browserRouter = createBrowserRouter(
    [
        {
            index: true,
            element: <IndexPage/>,
        },
        faqRoute,
    ],
    {
        basename: `/${kollection}`,
    },
);
