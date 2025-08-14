import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './routes/App.jsx'
import {RouterProvider} from "react-router-dom";
import {Provider} from "react-redux"
import { createBrowserRouter } from 'react-router-dom';
import Home from './routes/Home.jsx';
import Bag from './routes/Bag.jsx';
import myntrastore from './store/index.js';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home/> },
      {
        path: "/bag",
        element: <Bag/>,
       // action: createPostAction,
      },
    ],
  },
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={myntrastore}>
    <RouterProvider router={router}></RouterProvider>
    </Provider>
  </StrictMode>,
)
