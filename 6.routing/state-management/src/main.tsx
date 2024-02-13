import React from 'react'
import ReactDOM from 'react-dom/client'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import App from './App'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import 'bootstrap/dist/css/bootstrap.css';
import '../public/css/index.css';
import { RouterProvider } from 'react-router-dom';
import router from './routing/routes';
const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      {/* <App /> */}
      <RouterProvider router={ router}/>
      <ReactQueryDevtools/> 
    </QueryClientProvider>
  </React.StrictMode>,
)
