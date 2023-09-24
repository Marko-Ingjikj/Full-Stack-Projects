import axios from "axios";
import { useEffect, useState } from "react";
import AnimalCard from "./AnimalCard";
import { toast } from "react-toastify";
import { Animal } from "../../interfaces/animal.interface";
import { Link } from "react-router-dom";

const Animals = () => {
  const [animals, setAnimals] = useState([]);
  const userRole = localStorage.getItem("role");

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

  const handleDelete = async (animalId: string) => {
    try {
      await axios.delete(`http://localhost:3000/animals/${animalId}`);
      setAnimals((prevAnimals) =>
        prevAnimals.filter((animal: Animal) => animal.id !== animalId)
      );
    } catch (error) {
      console.error("Error deleting zookeeper:", error);
    }
  };

  return (
    <div className="animal-zookeeper-main animals-main">
      <div className="animal-detials"></div>
      {animals.map((animal: Animal) => (
        <AnimalCard
          key={animal.id}
          id={animal.id}
          name={animal.name}
          type={animal.type}
          age={animal.age}
          gender={animal.gender}
          location={animal.location}
          zookeeperId={animal.zookeeperId}
          onDelete={handleDelete}
        />
      ))}

      {userRole === "admin" && (
        <Link to={"/animal-form"} className="add-button">
          + Add Animal
        </Link>
      )}
    </div>
  );
};

export default Animals;
