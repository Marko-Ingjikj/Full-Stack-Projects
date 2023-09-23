import axios from "axios";
import { useEffect, useState } from "react";
import { Zookeeper } from "../../interfaces/zookeeper.interface";
import { Link } from "react-router-dom";

const AnimalCard = ({
  id,
  name,
  type,
  age,
  gender,
  location,
  zookeeperId,
}: {
  id: string;
  name: string;
  type: string;
  age: number;
  gender: string;
  location: string;
  zookeeperId: string | null;
}) => {
  const [zookeeper, setZookeeper] = useState<Zookeeper | null>(null);

  useEffect(() => {
    const getZookeeper = async () => {
      try {
        if (zookeeperId) {
          const response = await axios.get(
            `http://localhost:3000/zookeepers/${zookeeperId}`
          );
          setZookeeper(response.data);
        }
      } catch (error) {}
    };
    getZookeeper();
  }, [zookeeperId]);

  return (
    <div className="animal-card">
      <div className="animal-details">
        <h3>{name}</h3>
        <p>{type}</p>
        <p>{age} years</p>
        <p>{gender}</p>
        <p>{location}</p>
        <p>
          Zookeeper: {zookeeper ? zookeeper.name : "Currently no zookeeper"}
        </p>
      </div>

      <img
        src="https://clipartix.com/wp-content/uploads/2016/04/Animal-clipart-free-clipart-images.png"
        alt=""
        className="animal-image"
      />

      <div className="btn-div">
        <Link className="zookeeper-btn edit-btn" to={`/animal-form/${id}`}>
          Edit
        </Link>
        <button className="zookeeper-btn delete-btn">Delete</button>
      </div>
    </div>
  );
};
export default AnimalCard;
