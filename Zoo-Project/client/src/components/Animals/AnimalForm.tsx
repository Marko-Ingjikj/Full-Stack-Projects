import { useEffect, useState } from "react";
import { Animal } from "../../interfaces/animal.interface";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

const AnimalForm = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [animal, setAnimal] = useState<Animal | null>(null);

  const [name, setName] = useState<string>("");
  const [type, setType] = useState<string>("");
  const [age, setAge] = useState<number>(0);
  const [location, setLocation] = useState<string>("");
  const [gender, setGender] = useState<string>("");
  const [food, setFood] = useState<string>("");
  const [color, setColor] = useState<string>("");
  const [isDangeroues, setIsDangeroues] = useState<boolean>(false);
  const [enclosure, setEnclosure] = useState<string>("");

  useEffect(() => {
    const getAnimal = async () => {
      if (id) {
        try {
          const response = await axios.get(
            `http://localhost:3000/animals/${id}`
          );
          const animalData = response.data;
          setAnimal(animalData);

          setName(animalData.name);
          setType(animalData.type);
          setAge(animalData.age);
          setLocation(animalData.location);
          setGender(animalData.gender);
          setFood(animalData.characteristics.food);
          setColor(animalData.characteristics.color);
          setIsDangeroues(animalData.characteristics.isDangeroues);
          setEnclosure(animalData.characteristics.enclosure);
        } catch (error) {
          toast.error(
            "Error while getting animals, please check your connection",
            {
              position: "top-right",
              autoClose: 2000,
            }
          );
        }
      }
    };
    getAnimal();
  }, [id]);

  const handleSubmit = async () => {
    if (animal) {
      await axios.put(`http://localhost:3000/animals/${id}`, {
        name,
        type,
        age: age,
        location,
        gender,
        characteristics: {
          food: food.split(",").map((item) => item.trim()),
          color,
          isDangeroues,
          enclosure,
        },
      });
    } else {
      await axios.post(`http://localhost:3000/animals`, {
        name,
        type,
        age: age,
        location,
        gender,
        characteristics: {
          food: food.split(",").map((item) => item.trim()),
          color,
          isDangeroues,
          enclosure,
        },
      });
    }
    navigate("/animals");
  };

  return (
    <div className="form-main animal-form">
      <div className="form">
        <h1>{animal ? "Edit Animal" : "Add Animal"}</h1>
        <input
          type="text"
          placeholder="Name"
          value={name}
          className="form-input"
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="number"
          placeholder="Age"
          value={age}
          className="form-input"
          onChange={(e) => setAge(+e.target.value)}
        />
        <input
          type="text"
          placeholder="type"
          value={type}
          className="form-input"
          onChange={(e) => setType(e.target.value)}
        />
        <div className="select-field">
          <label htmlFor="gender">Gender:</label>
          <select
            value={gender}
            name="gender"
            id="gender"
            onChange={(e) => setGender(e.target.value)}>
            <option disabled value="">
              Select gender...
            </option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
        </div>
        <input
          type="text"
          placeholder="Location"
          value={location}
          className="form-input"
          onChange={(e) => setLocation(e.target.value)}
        />
        <input
          type="text"
          placeholder="Color"
          value={color}
          className="form-input"
          onChange={(e) => setColor(e.target.value)}
        />
        <input
          type="text"
          placeholder="Food"
          value={food}
          className="form-input"
          onChange={(e) => setFood(e.target.value)}
        />
        <div className="select-field">
          <label htmlFor="enclosure">Enclosure: </label>
          <select
            value={enclosure}
            name="enclosure"
            id="enclosure"
            onChange={(e) => setEnclosure(e.target.value)}>
            <option value="" disabled>
              Select enclosure...
            </option>
            <option value="aquarium">Aquarium</option>
            <option value="terrarium">Terrarium</option>
            <option value="paludarium">Paludarium</option>
            <option value="riparium">Riparium</option>
            <option value="aviary">Aviary</option>
            <option value="herpetarium">Herpetarium</option>
            <option value="serpentarium">Serpentarium</option>
            <option value="insectarium">Insectarium</option>
            <option value="formicarium">Formicarium</option>
            <option value="kinocorium">Kinocorium</option>
            <option value="orchidarium">Orchidarium</option>
            <option value="carnivarium">Carnivarium</option>
            <option value="succularium">Succularium</option>
            <option value="mossarium">Mossarium</option>
          </select>
        </div>
        <div className="checkbox-field">
          <label htmlFor="dangerous">Is dangerous:</label>
          <input
            type="checkbox"
            name="dangerous"
            id="dangerous"
            checked={isDangeroues}
            onChange={(e) => setIsDangeroues(e.target.checked)}
          />
        </div>

        <button
          disabled={
            !name ||
            !age ||
            !type ||
            !location ||
            !gender ||
            !food ||
            !color ||
            !enclosure
          }
          className="submit-btn"
          onClick={() => handleSubmit()}>
          Sumbmit
        </button>
      </div>

      <ToastContainer />
    </div>
  );
};

export default AnimalForm;
