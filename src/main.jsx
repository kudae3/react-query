import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { router } from './route';

import {
  RouterProvider,
} from "react-router";
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient()

createRoot(document.getElementById('root')).render(
  <QueryClientProvider client={queryClient}>
    <RouterProvider router={router} />
  </QueryClientProvider>,
)
