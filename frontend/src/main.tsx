import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import LoginRegister from './pages/LoginRegisterPage/LoginRegister.tsx'
import ToDoApp from './pages/ToDoAppPage/TodoApp.tsx'
import './index.css'

const router = createBrowserRouter ([
  {
    path: '/',
    element: <LoginRegister />,
  },
  {
    path: '/todo',
    element: <ToDoApp />,
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
