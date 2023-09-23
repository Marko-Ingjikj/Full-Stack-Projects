import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Zookeeper } from "../../interfaces/zookeeper.interface";
import { toast, ToastContainer } from "react-toastify";

const ZookeeperForm = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [zookeeper, setZookeeper] = useState<Zookeeper | null>(null);

  const [name, setName] = useState<string>("");
  const [age, setAge] = useState<number>(18);
  const [location, setLocation] = useState<string>("");
  const [isActive, setIsActive] = useState<boolean>(false);

  useEffect(() => {
    const getZookeeperData = async () => {
      if (id) {
        try {
          const response = await axios.get(
            `http://localhost:3000/zookeepers/${id}`
          );
          const zookeeperData = response.data;
          setZookeeper(zookeeperData);

          setName(zookeeperData.name);
          setAge(zookeeperData.age);
          setLocation(zookeeperData.location);
          setIsActive(zookeeperData.isActive);
        } catch (error) {
          toast.error(
            "Error while getting zookeepers, please check your connection",
            {
              position: "top-right",
              autoClose: 2000,
            }
          );
        }
      }
    };
    getZookeeperData();
  }, [id]);

  const handleSubmit = async () => {
    if (zookeeper) {
      await axios.put(`http://localhost:3000/zookeepers/${zookeeper.id}`, {
        name,
        age,
        location,
        isActive,
      });
    } else {
      await axios.post("http://localhost:3000/zookeepers", {
        name,
        age,
        location,
        isActive,
      });
    }

    navigate("/zookeepers");
  };

  return (
    <div className="form-main zookeeper-form">
      <div className="form">
        <h1>{zookeeper ? "Edit Zookeeper" : "Add Zookeeper"}</h1>
        <input
          className="form-input"
          type="text"
          name=""
          id=""
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          className="form-input"
          type="number"
          min={18}
          max={100}
          placeholder="Age"
          value={age}
          onChange={(e) => setAge(+e.target.value)}
        />
        <input
          className="form-input"
          type="text"
          placeholder="Location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
        <div className="checkbox-field">
          <label className="checkbox-label" htmlFor="isActive">
            Active:
          </label>
          <input
            type="checkbox"
            id="isActive"
            checked={isActive}
            onChange={(e) => setIsActive(e.target.checked)}
          />
        </div>

        <button
          onClick={() => handleSubmit()}
          className="submit-btn"
          disabled={!name || !age || !location}>
          Submit
        </button>
      </div>

      <ToastContainer />
    </div>
  );
};
export default ZookeeperForm;
