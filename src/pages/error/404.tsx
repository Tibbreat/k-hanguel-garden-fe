// src/pages/NotFound.tsx
import { Button, Input, Layout, theme } from 'antd';
import {
  HomeOutlined,
  BookOutlined,
  TeamOutlined,
  SearchOutlined,
} from '@ant-design/icons';
import { Link } from 'react-router-dom';

const { Content } = Layout;

const NotFound = () => {
  const { token } = theme.useToken();

  return (
    <Layout style={{ minHeight: '100vh', background: token.colorBgBase }}>
      <Content
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          padding: 20,
        }}
      >
        <div
          style={{
            maxWidth: 500,
            width: '100%',
            background: token.colorBgContainer,
            borderRadius: 16,
            padding: 32,
            textAlign: 'center',
            boxShadow: '0 4px 20px rgba(0,0,0,0.06)',
          }}
        >
          <div style={{ fontSize: 48 }}>😵</div>
          <h1 style={{ fontSize: 24, margin: '12px 0', color: token.colorTextBase }}>
            Oops! Trang này không tồn tại
          </h1>
          <p style={{ color: token.colorTextDescription }}>
            Có vẻ như bạn đã lạc khỏi con đường trong khu vườn 🌸
          </p>

          <Link to="/">
            <Button
              size="large"
              type="primary"
              style={{ marginTop: 20 }}
            >
              🌱 Trở về trang chủ
            </Button>
          </Link>

          <Input
            placeholder="Tìm kiếm trong khu vườn..."
            prefix={<SearchOutlined />}
            style={{ marginTop: 20, borderRadius: 6 }}
          />

          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              gap: 12,
              marginTop: 24,
            }}
          >
            <Link to="/">
              <Button icon={<HomeOutlined />} shape="round">
                Trang chủ
              </Button>
            </Link>
            <Link to="/lessons">
              <Button icon={<BookOutlined />} shape="round">
                Bài học
              </Button>
            </Link>
            <Link to="/community">
              <Button icon={<TeamOutlined />} shape="round">
                Cộng đồng
              </Button>
            </Link>
          </div>

          <p style={{ marginTop: 24, fontSize: 12, color: token.colorTextQuaternary }}>
            Need help? Liên hệ với đội ngũ hỗ trợ của chúng tôi hoặc kiểm tra phần FAQ.
          </p>
        </div>
      </Content>
    </Layout>
  );
};

export default NotFound;
