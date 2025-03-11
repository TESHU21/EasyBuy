import React from 'react'
import ReactDOM from "react-dom/client";
import AllRoutes from './routes/AllRoutes';
import { Toaster } from 'sonner';

const App = () => {
  return (
    <div>
      <AllRoutes />
      <Toaster position="top-right" toastOptions={{
        style:{
          background: "#1e293b", // Dark blue background
          color: "#f8fafc",
        }
      }}/>
    </div>
  )
}

export default App