import zookeeperLogo from "../../assets/zookeeperCard.png";

const ZookeeperCard = ({
  name,
  age,
  location,
  isActive,
}: {
  name: string;
  age: number;
  location: string;
  isActive: boolean;
}) => {
  return (
    <div className="zookeeper-card">
      <div className="zookeeper-details">
        <h3>{name}</h3>
        <p>{age}</p>
        <p>{location}</p>
        {isActive ? (
          <p className="active">Currently active</p>
        ) : (
          <p className="not-active">Currently not active</p>
        )}
      </div>

      <img
        src={zookeeperLogo}
        alt="zookeeper image"
        className="zookeeper-image"
      />
    </div>
  );
};
export default ZookeeperCard;
