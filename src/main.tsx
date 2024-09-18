import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import CountryCitiesDropdown from './components/CountryCitiesDropdown.tsx/CountryCitiesDropdown.tsx'
import UseMemo from './components/UseMemo/UseMemo.tsx'
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Products from './components/Products/Products.tsx'

const router = createBrowserRouter([
  {
    element: <App/>,
    children: [
      {
        path: '/',
        element: <CountryCitiesDropdown/>
      },
      {
        path: '/useMemo',
        element: <UseMemo/>
      },
      {
        path: '/products',
        element: <Products/>
      }
    ]
  }
]);

// React query does data fetching and caching through a single client instance which is called QueryClient.
const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <QueryClientProvider client={queryClient}>
    <RouterProvider router={router}/>
  </QueryClientProvider>
)
