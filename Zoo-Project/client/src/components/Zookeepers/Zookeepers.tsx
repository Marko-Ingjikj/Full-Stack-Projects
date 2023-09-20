import { useEffect, useState } from "react";
import axios from "axios";
import ZookeeperCard from "./ZookeeperCard";

interface Zookeeper {
  id: string;
  name: string;
  age: number;
  location: string;
  isActive: boolean;
}

const Zookeepers = () => {
  const [zookeepers, setZookeepers] = useState([]);
  console.log(zookeepers);

  useEffect(() => {
    const fetchZookeeper = async () => {
      try {
        const response = await axios.get("http://localhost:3000/zookeepers");
        setZookeepers(response.data);
      } catch (error) {}
    };
    fetchZookeeper();
  }, []);

  return (
    <div className="zookeepers-main">
      {zookeepers.map((zookeeper: Zookeeper) => (
        <ZookeeperCard
          key={zookeeper.id}
          name={zookeeper.name}
          age={zookeeper.age}
          location={zookeeper.location}
          isActive={zookeeper.isActive}
        />
      ))}
    </div>
  );
};

export default Zookeepers;
