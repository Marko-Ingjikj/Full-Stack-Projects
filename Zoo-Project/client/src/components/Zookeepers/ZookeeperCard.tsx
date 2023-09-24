import { Link } from "react-router-dom";
import zookeeperLogo from "../../assets/zookeeperCard.png";
import { Zookeeper } from "../../interfaces/zookeeper.interface";

interface ZookeeperCardProps {
  zookeeper: Zookeeper;
  onDelete: (zookeeperId: string) => void;
}

const ZookeeperCard: React.FC<ZookeeperCardProps> = ({
  zookeeper,
  onDelete,
}) => {
  const userRole = localStorage.getItem("role");

  return (
    <div className="zookeeper-card">
      <div className="zookeeper-details">
        <h3>{zookeeper.name}</h3>
        <p>Age: {zookeeper.age} years</p>
        <p>Location: {zookeeper.location}</p>
        {zookeeper.isActive ? (
          <p className="active">Currently active</p>
        ) : (
          <p className="not-active">Currently not active</p>
        )}
        <p>Supervising animals: {zookeeper.animals.length}</p>
      </div>

      <img
        src={zookeeperLogo}
        alt="zookeeper image"
        className="zookeeper-image"
      />
      {userRole === "admin" && (
        <div className="btn-div">
          <Link
            className="zookeeper-btn edit-btn"
            to={`/zookeeper-form/${zookeeper.id}`}>
            Edit
          </Link>
          <button
            onClick={() => onDelete(zookeeper.id)}
            className="zookeeper-btn delete-btn">
            Delete
          </button>
        </div>
      )}
    </div>
  );
};
export default ZookeeperCard;
