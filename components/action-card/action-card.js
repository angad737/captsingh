import { Card } from "antd";

const ActionCard = (props) => {
  const { title, description, image, link, linkText } = props;
  return (
    <>
      <Card
        hoverable
        style={{
          width: 360,
          margin: "60px auto",
          padding: "20px",
          marginBottom: "20px",
        }}
        cover={<img alt={title} src={image} />}
      >
        <Card.Meta title={title} description={description} />
        <a href={link}>{linkText}</a>
      </Card>
    </>
  );
};
export default ActionCard;
