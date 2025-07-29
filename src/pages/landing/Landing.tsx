import AppHeader from '../../component/layout/AppHeader';
import AppFooter from '../../component/layout/AppFooter';
import { Outlet } from 'react-router-dom';
import { Layout } from 'antd';

const { Content } = Layout;

const Landing = () => {
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <AppHeader />
      <Content style={{ padding: '40px 20px' }}>
        <Outlet />
      </Content>
      <AppFooter />
    </Layout>
  );
}

export default Landing;