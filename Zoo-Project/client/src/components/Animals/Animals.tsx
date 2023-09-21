import axios from "axios";
import { useEffect, useState } from "react";
import AnimalCard from "./AnimalCard";
import { toast, ToastContainer } from "react-toastify";

interface Animal {
  id: string;
  name: string;
  type: string;
  age: number;
  characteristics: {};
  gender: "Male" | "Female";
  location: string;
  zookeeperId: string | null;
}

const Animals = () => {
  const [animals, setAnimals] = useState([]);

  useEffect(() => {
    const fetchAnimals = async () => {
      try {
        const response = await axios.get("http://localhost:3000/animals");
        setAnimals(response.data);
      } catch (error) {
        toast.error(
          "Error while getting animals, please check your connection",
          {
            position: "top-right",
            autoClose: 2000,
          }
        );
      }
    };
    fetchAnimals();
  }, []);

  return (
    <div className="animals-main">
      <div className="animal-detials"></div>
      {animals.map((animal: Animal) => (
        <AnimalCard
          key={animal.id}
          name={animal.name}
          type={animal.type}
          age={animal.age}
          characteristics={animal.characteristics}
          gender={animal.gender}
          location={animal.location}
          zookeeperId={animal.zookeeperId}
        />
      ))}
      <ToastContainer />
    </div>
  );
};

export default Animals;
