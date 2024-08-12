import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createHashRouter } from 'react-router-dom';
import { HomeLayout } from "./pages";
import { GlobalStyled } from './GlobalStyled.ts';
import MainNews from './components/MainNews/MainNews.tsx';
import MainAmerican from './components/MainAmerican/MainAmerican.tsx';
import MainChart from './components/MainChart/MainChart.tsx';
import MainAuth from './components/MainAuth/MainAuth.tsx';
import MainDashboard from './components/MainDashboard/MainDashboard.tsx';
import MainStock from './components/MainStock/MainStock.tsx';
import TrackStock from './components/TrackStock/TrackStock.tsx';
import { Provider } from 'react-redux';
import { stockStore } from './store/stockStore';
// import { ApiProvider } from '@reduxjs/toolkit/query/react';
import { stockApi } from './features/apiSlice.ts';
import ErrorPage from './pages/ErrorPage/ErrorPage.tsx';


const router = createHashRouter([
  {
    path: "/",
    element: <HomeLayout />,
    errorElement:<ErrorPage/>,
    children: [
      {
        index: true,
        path: '/',
        element: <MainDashboard />,
        errorElement:<ErrorPage/>,
      },
      {
        path: "/stock/:id",
        element: <MainStock />
      },
      {
        path: "/stock_history/:id",
        element: <MainChart />
      }, {
        path: "/stock_news",
        element: <MainNews />
      },
      {
        path: "/overall_american_stock",
        element: <MainAmerican />
      },
      {
        path: "/auth/:id",
        element: <MainAuth />
      }, {
        path: '/my_tracking_list',
        element: <TrackStock />
      }
    ]
  },

])


ReactDOM.createRoot(document.getElementById('root')!).render(
  // <React.StrictMode>
  <>
    <GlobalStyled />
    <Provider store={stockStore}>
    {/* <ApiProvider api={stockApi}> */}
      <RouterProvider router={router} />
    {/* </ApiProvider> */}
    </Provider>
  </>
  //</React.StrictMode>,
)
