import { useEffect, useState } from "react";
import { Animal } from "../../interfaces/animal.interface";
import { Zookeeper } from "../../interfaces/zookeeper.interface";
import axios from "axios";
import { toast } from "react-toastify";

const AssignAnimal = () => {
  const [animals, setAnimals] = useState<Animal[] | null>(null);
  const [zookeepers, setZookeepers] = useState<Zookeeper[] | null>(null);

  const [animalId, setAnimalId] = useState<string>("");
  const [zookeeperId, setZookeeperId] = useState<string>("");

  useEffect(() => {
    const fetchData = async () => {
      const animalData = await axios.get("http://localhost:3000/animals");
      setAnimals(animalData.data);

      const zookeperData = await axios.get("http://localhost:3000/zookeepers");
      setZookeepers(zookeperData.data);
    };
    fetchData();
  }, []);

  const handleSubmit = async () => {
    await axios.patch(
      `http://localhost:3000/zookeepers/${zookeeperId}/animals`,
      {
        animalId,
      }
    );
    toast.success("Successfully updated", {
      position: "top-right",
      autoClose: 2000,
    });

    setAnimalId("");
    setZookeeperId("");
  };

  return (
    <div className="assign-animals-section admin-settings-section">
      <h3>Assign Animal to Zookeeper</h3>
      <div className="select-field">
        <label htmlFor="zookeeper">Select Zookeeper:</label>
        <select
          value={zookeeperId}
          name="zookeeper"
          id="zookeeper"
          onChange={(e) => setZookeeperId(e.target.value)}>
          <option value="" disabled>
            Select zookeeper...
          </option>
          {zookeepers?.length != 0 &&
            zookeepers?.map((zookeeper: Zookeeper) => (
              <option key={zookeeper.id} value={zookeeper.id}>
                {zookeeper.name}
              </option>
            ))}
        </select>
      </div>
      <div className="select-field">
        <label htmlFor="animal">Selet Animal:</label>
        <select
          value={animalId}
          name="animal"
          id="animal"
          onChange={(e) => setAnimalId(e.target.value)}>
          <option value="" disabled>
            Select animal...
          </option>
          {animals?.length != 0 &&
            animals?.map((animal: Animal) => (
              <option key={animal.id} value={animal.id}>
                {animal.name}
              </option>
            ))}
        </select>
      </div>

      <button
        className="submit-btn"
        onClick={() => handleSubmit()}
        disabled={!animalId || !zookeeperId}>
        Update
      </button>
    </div>
  );
};

export default AssignAnimal;
