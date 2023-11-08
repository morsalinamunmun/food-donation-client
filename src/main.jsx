import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {
  RouterProvider,
} from "react-router-dom";
import router from './Routes/Routes';
import AuthProvider from './Provider/AuthProvider';
import { ThemeProvider } from '@material-tailwind/react';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
    <ThemeProvider>
    <RouterProvider router={router} />
    </ThemeProvider>
    </AuthProvider>
  </React.StrictMode>,
)
