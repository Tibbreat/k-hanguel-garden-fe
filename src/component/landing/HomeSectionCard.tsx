import { Card, Typography } from "antd";
import { Icon } from "@iconify/react";
const { Text } = Typography;

type Props = {
    f: {
        icon: string;
        title: string;
        desc: string;
        color: string;
    };
};

const HomeSectionCard = ({ f }: Props) => {
    return (
        <Card
            hoverable
            style={{ borderRadius: 16, height: "100%" }}
            bodyStyle={{ padding: 24 }}
        >
            <div
                style={{
                    backgroundColor: f.color,
                    width: 64,
                    height: 64,
                    borderRadius: 12,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    marginBottom: 16,
                }}
            >
                <Icon icon={f.icon} fontSize={28} />
            </div>
            <Text strong style={{ fontSize: 16 }}>{f.title}</Text>
            <br />
            <Text type="secondary">{f.desc}</Text>
        </Card>
    );
};

export default HomeSectionCard;
