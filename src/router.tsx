import { Suspense, lazy } from 'react';
import { Navigate } from 'react-router-dom';
import { RouteObject } from 'react-router';

import SidebarLayout from 'src/layouts/SidebarLayout';
import BaseLayout from 'src/layouts/BaseLayout';

import SuspenseLoader from 'src/components/SuspenseLoader';

const Loader = (Component) => (props) =>
  (
    <Suspense fallback={<SuspenseLoader />}>
      <Component {...props} />
    </Suspense>
  );

// Pages

const Overview = Loader(lazy(() => import('src/content/overview')));

// Dashboards
const Dashboard1 = Loader(
  lazy(() => import('src/content/dashboards/Dashboard1'))
);
const Dashboard2 = Loader(
  lazy(() => import('src/content/dashboards/Dashboard2'))
);
const Dashboard3 = Loader(
  lazy(() => import('src/content/dashboards/Dashboard3'))
);
const Dashboard4 = Loader(
  lazy(() => import('src/content/dashboards/Dashboard4'))
);
const Dashboard5 = Loader(
  lazy(() => import('src/content/dashboards/Dashboard5'))
);
const Dashboard6 = Loader(
  lazy(() => import('src/content/dashboards/Dashboard6'))
);
const Dashboard7 = Loader(
  lazy(() => import('src/content/dashboards/Dashboard7'))
);

const Status404 = Loader(
  lazy(() => import('src/content/pages/Status/Status404'))
);

const routes: RouteObject[] = [
  {
    path: '',
    element: <BaseLayout />,
    children: [
      {
        path: '/',
        element: <Overview />
      },
      {
        path: 'overview',
        element: <Overview />
      },
      {
        path: '*',
        element: <Status404 />
      }
    ]
  },
  {
    path: 'dashboards',
    element: <SidebarLayout />,
    children: [
      {
        path: '',
        element: <Navigate to="crypto" replace />
      },
      {
        path: '1',
        element: <Dashboard1 />
      },
      {
        path: '2',
        element: <Dashboard2 />
      },
      {
        path: '3',
        element: <Dashboard3 />
      },
      {
        path: '4',
        element: <Dashboard4 />
      },
      {
        path: '5',
        element: <Dashboard5 />
      },
      {
        path: '6',
        element: <Dashboard6 />
      },
      {
        path: '7',
        element: <Dashboard7 />
      },
    ]
  },
];

export default routes;
