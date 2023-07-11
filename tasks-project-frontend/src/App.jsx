import { useEffect, useState } from "react";
import "./App.css";
import { TaskApi } from "./api/tasks.api";

function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    async function fetchAll() {
      const response = await TaskApi.getAll();

      setTasks(response);
    }

    fetchAll();
  }, []);

  return <></>;
}

export default App;
