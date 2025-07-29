import { createRoot } from 'react-dom/client'
import 'antd/dist/reset.css';
import { AuthProvider } from './context/AuthContext';
import { RouterProvider } from 'react-router-dom';
import router from './router/router';
import { ConfigProvider } from 'antd';
import { lightTheme } from './theme';

createRoot(document.getElementById('root')!).render(
  <ConfigProvider theme={lightTheme}>

    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </ConfigProvider>


)