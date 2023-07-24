import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css';
import Layout from './MainLayout/Layout';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Home/Home';
import Statistics from './components/Statistics/Statistics';
import AppliedJobs from './components/AppliedJobs/AppliedJobs';
import Blog from './components/Blog/Blog';
import FeaturedJob from './components/FeaturedJob/FeaturedJob';
import JobDetails from './components/JobDetails/JobDetails';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: 'statistics',
        element: <Statistics></Statistics>,
        loader: () => fetch('chart.json')
      },
      {
        path: 'appliedJobs',
        element: <AppliedJobs></AppliedJobs>,
        loader: () => fetch('jobDetails.json')
      },
      {
        path: 'blog',
        element: <Blog></Blog>
      },
      {
        path: 'featuredJob',
        element: <FeaturedJob></FeaturedJob>

      },
      {
        path: '/:id',
        element: <JobDetails></JobDetails>,
        loader: async ({ params }) => (params)
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
