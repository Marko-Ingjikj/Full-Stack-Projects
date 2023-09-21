import { useEffect, useState } from "react";
import axios from "axios";
import ZookeeperCard from "./ZookeeperCard";
import { toast, ToastContainer } from "react-toastify";

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
      } catch (error) {
        toast.error(
          "Error while getting zookeepers, please check your connection",
          {
            position: "top-right",
            autoClose: 2000,
          }
        );
      }
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

      <ToastContainer />
    </div>
  );
};

export default Zookeepers;
