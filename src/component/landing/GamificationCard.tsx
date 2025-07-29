import { Card, Typography } from "antd";
const { Text } = Typography;


interface GamificationCardProps {
  svg: string;
  label: string;
  color: string;
}

const GamificationCard = ({ svg, label, color }: GamificationCardProps) => {
  return (
    <Card
      hoverable
      style={{
        borderRadius: 16,
        padding: 0,
        height: "100%",
        boxShadow: "0 2px 8px rgba(0,0,0,0.03)",
      }}
      bodyStyle={{
        padding: 16,
        display: "flex",
        alignItems: "center",
        gap: 16,
      }}
    >
      <div
        style={{
          width: 48,
          height: 48,
          borderRadius: "50%",
          backgroundColor: color,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img src={svg} alt="icon" style={{ width: 28, height: 28 }} />
      </div>
      <Text strong style={{ fontSize: 16 }}>
        {label}
      </Text>
    </Card>
  );
};

export default GamificationCard;