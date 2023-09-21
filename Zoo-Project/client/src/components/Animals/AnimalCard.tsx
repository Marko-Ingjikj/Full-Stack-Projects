import axios from "axios";
import { useEffect, useState } from "react";

interface Zookeeper {
  id: string;
  name: string;
  age: number;
  location: string;
  isActive: boolean;
}

const AnimalCard = ({
  name,
  type,
  age,
  characteristics,
  gender,
  location,
  zookeeperId,
}: {
  name: string;
  type: string;
  age: number;
  characteristics: {};
  gender: string;
  location: string;
  zookeeperId: string | null;
}) => {
  const [zookeeper, setZookeeper] = useState<Zookeeper | null>(null);

  useEffect(() => {
    const getZookeeper = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3000/zookeepers/${zookeeperId}`
        );
        console.log(response.data);

        setZookeeper(response.data);
      } catch (error) {}
    };
    getZookeeper();
  }, []);

  return (
    <div className="animal-card">
      <div className="animal-details">
        {" "}
        <h3>{name}</h3>
        <p>{type}</p>
        <p>{age} years</p>
        <p>{gender}</p>
        <p>{location}</p>
        <p>
          {zookeeper ? <p>{zookeeper.name}</p> : <p>Currently no zookeeper</p>}
        </p>
      </div>

      <img
        src="https://clipartix.com/wp-content/uploads/2016/04/Animal-clipart-free-clipart-images.png"
        alt=""
        className="animal-image"
      />
    </div>
  );
};
export default AnimalCard;
