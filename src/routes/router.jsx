import { createBrowserRouter } from 'react-router-dom'
import AppLayout from '../layouts/AppLayout'
import HomePage from '../pages/HomePage'
import NotFoundPage from '../pages/NotFoundPage'
import RepositoryDetailsPage from '../pages/RepositoryDetailsPage'
import UserProfilePage from '../pages/UserProfilePage'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: 'users/:username',
        element: <UserProfilePage />,
      },
      {
        path: 'users/:username/repos/:repositoryName',
        element: <RepositoryDetailsPage />,
      },
      {
        path: '*',
        element: <NotFoundPage />,
      },
    ],
  },
])
