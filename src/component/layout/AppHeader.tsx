import { Layout, Menu, Button, Drawer, Grid } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import '../../styles/theme.less';
import { Link } from 'react-router-dom';

import { useState } from 'react';

const { Header } = Layout;

const { useBreakpoint } = Grid;


const AppHeader = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const screens = useBreakpoint();

  const menu = (
    <Menu mode={screens.md ? 'horizontal' : 'vertical'} className="menu" selectable={false}>
      <Menu.Item key="features">Tính năng</Menu.Item>
      <Menu.Item key="group">Học nhóm</Menu.Item>
      <Menu.Item key="pricing">Gói học</Menu.Item>
    </Menu>
  );

  return (
    <Header className="app-header" style={{ position: 'sticky', top: 0, zIndex: 999, padding: '0 40px' }}>
      <div
        style={{
          maxWidth: 1200,
          margin: '0 auto',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          height: 64,
        }}
      >
        <Link to="/" style={{ color: 'inherit', textDecoration: 'none' }}>
          <div className="logo">🌸 K-Hangeul Garden</div>
        </Link>

        {screens.md ? (
          <>
            {menu}
            <Link to="/auth/login">
              <Button type="primary" icon={<UserOutlined />}>
                Đăng nhập
              </Button>
            </Link>
          </>
        ) : (
          <>
            <Button
              type="text"
              icon={
                <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M4 6h16M4 12h16M4 18h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
              }
              onClick={() => setDrawerOpen(true)}
            />
            <Drawer
              title={<div style={{ fontWeight: 600 }}>🌸 K-Hangeul Garden</div>}
              placement="right"
              onClose={() => setDrawerOpen(false)}
              open={drawerOpen}
              bodyStyle={{ padding: 0 }}
            >
              {menu}
              <div style={{ padding: 16, textAlign: 'center' }}>
                <Link to="/auth/login" onClick={() => setDrawerOpen(false)}>
                  <Button type="primary" icon={<UserOutlined />} block>
                    Đăng nhập
                  </Button>
                </Link>
              </div>
            </Drawer>
          </>
        )}
      </div>
    </Header>
  );
};

export default AppHeader;
