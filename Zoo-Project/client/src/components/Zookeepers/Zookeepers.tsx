import { useEffect, useState } from "react";
import axios from "axios";
import ZookeeperCard from "./ZookeeperCard";
import { toast, ToastContainer } from "react-toastify";
import { Zookeeper } from "../../interfaces/zookeeper.interface";
import { Link } from "react-router-dom";

const Zookeepers = () => {
  const [zookeepers, setZookeepers] = useState([]);

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

  const handleDelete = async (zookeeperId: string) => {
    try {
      await axios.delete(`http://localhost:3000/zookeepers/${zookeeperId}`);
      setZookeepers((prevZookeepers) =>
        prevZookeepers.filter(
          (zookeeper: Zookeeper) => zookeeper.id !== zookeeperId
        )
      );
    } catch (error) {
      console.error("Error deleting zookeeper:", error);
    }
  };

  return (
    <div className="animal-zookeeper-main zookeepers-main">
      {zookeepers.map((zookeeper: Zookeeper) => (
        <ZookeeperCard
          key={zookeeper.id}
          zookeeper={zookeeper}
          onDelete={handleDelete}
        />
      ))}

      <Link to={"/zookeeper-form"} className="add-button">
        + Add Zookeeper
      </Link>
      <ToastContainer />
    </div>
  );
};

export default Zookeepers;
