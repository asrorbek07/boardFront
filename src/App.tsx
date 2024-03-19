import {useEffect, useMemo} from 'react';
import { RouterProvider } from 'react-router-dom';
import { initInterceptors, useAuth, useDock } from '@vizendjs/dock-ui';
import { browserRouter } from './pages/router';
import dev from './dev';
import axios, { AxiosError } from 'axios';
import { CommandResponse, QueryResponse } from '@vizendjs/accent';


const App = () => {
    useEffect(() => {
        document.body.style.margin = '0';
    }, []);
  const router = useMemo(() => browserRouter, []);
  const dock = useDock();
  const auth = useAuth();
  initInterceptors();
  if (dev.development) {
    auth._dev.init(dev.auth);
    dock._dev.init(dev.dock);
  }

  axios.interceptors.response.use(
    undefined,
    (error: AxiosError) => {
      //
      const response = error.response;
      if (error.code === 'ERR_NETWORK') {
        console.log('connection problems..');
      } else if (error.code === 'ERR_CANCELED') {
        console.log('connection canceled..');
      }
      if (response) {
        const statusCode = response.status;
        if (statusCode === 404) {
          console.log('The requested resource does not exist or has been deleted');
        } else if (statusCode === 401) {
          console.log('Please login to access this resource');
        }
        // const exceptionName = (response.data as QueryResponse | CommandResponse).failureMessage?.exceptionName || response.statusText || 'UNKNOWN ERROR';
        const exceptionMessage = (response.data as QueryResponse | CommandResponse).failureMessage?.exceptionMessage || error.message || 'UNKNOWN ERROR';
        alert(exceptionMessage);
      }
    },
  );

  return <RouterProvider router={router} />;
};

export default App;
