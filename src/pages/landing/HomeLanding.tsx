import { Row, Col, Typography, Button, theme, Input, Avatar } from "antd";
import HomeSectionCard from "../../component/landing/HomeSectionCard";
import { Features, Gamifications } from "../../types/HomeData";
import GamificationCard from "../../component/landing/GamificationCard";
import { Icon } from "@iconify/react";

const { Title, Text } = Typography;

const HomeLanding = () => {
    const { token } = theme.useToken();

    return (
        <div style={{ backgroundColor: token.colorBgBase }}>
            {/* Section 1: Hero */}
            <section
                style={{
                    padding: "80px 24px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                }}
            >
                <Row gutter={[48, 32]} style={{ maxWidth: 1200, width: "100%" }}>
                    <Col xs={24} md={12}>
                        <Title level={2} style={{ fontSize: "2.5rem" }}>
                            Chào mừng đến với <br />
                            <span style={{ color: token.colorPrimary }}>K-Hangeul Garden</span> 🌸
                        </Title>


                        <Text style={{ fontSize: 18, color: token.colorTextSecondary }}>
                            Học tiếng Hàn theo cách dễ thương và thú vị!
                        </Text>
                        <div style={{ marginTop: 32 }}>
                            <Button type="primary" size="large">
                                Bắt đầu học ngay
                            </Button>
                        </div>
                    </Col>
                    <Col xs={24} md={12}>
                        <div
                            style={{
                                height: 300,
                                background: token.colorFillTertiary,
                                borderRadius: 16,
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                textAlign: "center",
                            }}
                        >
                            <Text>Hangeul Characters with Cute Expressions & Floating Flowers</Text>
                        </div>
                    </Col>
                </Row>
            </section>

            {/* Section 2: Features */}
            <section style={{ background: token.colorFillQuaternary, padding: "64px 24px" }}>
                <Title level={3} style={{ textAlign: "center", marginBottom: 48 }}>
                    Học tiếng Hàn theo cách của bạn
                </Title>
                <Row gutter={[24, 24]} justify="center" style={{ maxWidth: 1200, margin: "0 auto" }}>
                    {Features.map((f, i) => (
                        <Col xs={24} sm={12} md={8} key={i}>
                            <HomeSectionCard f={f} />
                        </Col>
                    ))}
                </Row>
            </section>

            {/* Section 3: Gamification */}
            <section style={{ padding: "64px 24px" }}>
                <Row gutter={[48, 32]} style={{ maxWidth: 1200, margin: "0 auto" }}>
                    <Col xs={24} md={12}>
                        <Title level={4}>Biến việc học thành một trò chơi!</Title>
                        <Text>
                            Giữ động lực với các chuỗi học tập, huy hiệu, điểm XP và nhiệm vụ hàng ngày khiến việc học tiếng Hàn trở nên thú vị hơn.
                        </Text>
                        <Row gutter={[16, 16]} style={{ marginTop: 24 }}>
                            {Gamifications.map((item, index) => (
                                <Col xs={24} sm={12} key={index}>
                                    <GamificationCard svg={item.svg} label={item.label} color={item.color} />
                                </Col>
                            ))}
                        </Row>
                    </Col>
                    <Col xs={24} md={12}>
                        <div
                            style={{
                                height: 300,
                                background: token.colorFillTertiary,
                                borderRadius: 16,
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                textAlign: "center",
                            }}
                        >
                            <Text>Cute Trophies & Mascots Illustration</Text>
                        </div>
                    </Col>
                </Row>
            </section>

            {/* Section 4: Study Together */}
            <section
                style={{ background: token.colorFillQuaternary, padding: "64px 24px" }}
            >
                <Row gutter={[48, 32]} style={{ maxWidth: 1200, margin: "0 auto" }}>
                    {/* BÊN TRÁI - HÌNH ẢNH / PLACEHOLDER */}
                    <Col xs={24} md={12}>
                        <div
                            style={{
                                height: 300,
                                background: token.colorFillTertiary,
                                borderRadius: 16,
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                textAlign: "center",
                                color: token.colorTextSecondary,
                                padding: 16,
                            }}
                        >
                            <Text> Cute Avatars & Speech Bubbles Design </Text>
                        </div>
                    </Col>

                    {/* BÊN PHẢI - TIÊU ĐỀ + CHAT + NÚT */}
                    <Col xs={24} md={12}>
                        <Title level={4}>
                            Study Together{" "}
                            <Icon icon="fluent-emoji-flat:speech-balloon" width={20} />
                        </Title>
                        <Text>
                            Join group chats, share word decks, and help each other grow
                            in your Korean learning journey.
                        </Text>

                        {/* Chat bubble UI */}
                        <Row gutter={[16, 16]} style={{ marginTop: 24 }}>
                            <div
                                style={{
                                    background: token.colorFillSecondary,
                                    padding: 16,
                                    borderRadius: 12,
                                    display: "flex",
                                    alignItems: "center",
                                    gap: 8,
                                }}
                            >
                                <Avatar
                                    style={{ backgroundColor: token.colorPrimary }}
                                    icon={<Icon icon="fluent-emoji-flat:person" />}
                                />
                                <Text>Chào mọi người! Mình mới bắt đầu học tiếng Hàn.</Text>
                            </div>
                        </Row>
                        <Row justify={"end"} style={{ marginTop: 16 }}>
                            <div
                                style={{
                                    background: token.colorFillSecondary,
                                    padding: 16,
                                    borderRadius: 12,
                                    display: "flex",
                                    alignItems: "center",
                                    gap: 8,
                                }}
                            >

                                <Text>Chào! Mình có thể giúp gì cho bạn?</Text>
                                <Avatar
                                    style={{ backgroundColor: token.colorPrimary }}
                                    icon={<Icon icon="fluent-emoji-flat:person" />}
                                />
                            </div>

                        </Row>
                    </Col>
                </Row>
            </section>
        </div>
    );
};

export default HomeLanding;
