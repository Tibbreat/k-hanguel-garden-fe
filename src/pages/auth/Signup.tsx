import {
    Button,
    Checkbox,
    Form,
    Input,
    Typography,
    Divider,
    Layout,
    theme,
} from 'antd';
import {
    MailOutlined,
    LockOutlined,
    GoogleOutlined,
} from '@ant-design/icons';
import { Link } from 'react-router-dom';

const { Content } = Layout;
const { Title, Text } = Typography;

const Signup = () => {
    const { token } = theme.useToken();

    return (
        <Layout
            style={{
                backgroundColor: token.colorBgBase,
                minHeight: '100vh',
                position: 'relative',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >
            <Content
                style={{
                    position: 'relative',
                    width: '100%',
                    maxWidth: 600,
                }}
            >
                {/* FORM ĐĂNG KÝ */}
                <div
                    style={{
                        background: token.colorBgContainer,
                        borderRadius: 16,
                        padding: 32,
                        boxShadow: '0 4px 20px rgba(0,0,0,0.05)',
                        position: 'relative',
                        zIndex: 2,
                    }}
                >
                    <Title level={3} style={{ marginBottom: 4 }}>
                        🌸 Chào mừng bạn đến với khu vườn!
                    </Title>
                    <Text style={{ color: token.colorTextSecondary }}>
                        Đăng ký để bắt đầu hành trình học tiếng Hàn
                    </Text>

                    <Form layout="vertical" style={{ marginTop: 24 }}>
                        <Form.Item label="Email" name="email" required>
                            <Input
                                size="large"
                                placeholder="your@email.com"
                                prefix={<MailOutlined />}
                            />
                        </Form.Item>

                        <Form.Item label="Mật khẩu" name="password" required>
                            <Input.Password
                                size="large"
                                placeholder="••••••••"
                                prefix={<LockOutlined />}
                            />
                        </Form.Item>

                        <Form.Item label="Xác nhận mật khẩu" name="confirmPassword" required>
                            <Input.Password
                                size="large"
                                placeholder="••••••••"
                                prefix={<LockOutlined />}
                            />
                        </Form.Item>

                        <Form.Item>
                            <Checkbox>Tôi đồng ý với <Link to="/terms" style={{ color: token.colorPrimary }}>Điều khoản dịch vụ</Link></Checkbox>
                        </Form.Item>

                        <Form.Item>
                            <Button
                                type="primary"
                                size="large"
                                block
                                style={{
                                    borderRadius: 8,
                                    backgroundColor: '#1A1A1A',
                                    borderColor: '#1A1A1A',
                                }}
                            >
                                Đăng ký
                            </Button>
                        </Form.Item>

                        <Divider plain>hoặc</Divider>

                        <Button
                            icon={<GoogleOutlined />}
                            block
                            size="large"
                            style={{
                                borderRadius: 8,
                                borderColor: token.colorBorder,
                                marginBottom: 12,
                            }}
                        >
                            Tiếp tục với Google
                        </Button>

                        <Text style={{ display: 'block', textAlign: 'center' }}>
                            Đã có tài khoản?{' '}
                            <Link to="/auth/login" style={{ color: token.colorPrimary }}>
                                Đăng nhập <span role="img">🌱</span>
                            </Link>
                        </Text>
                    </Form>
                </div>
            </Content>
        </Layout>
    );
};

export default Signup;
