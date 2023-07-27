import { useEffect, useState } from "react";
import { TaskApi } from "../../api/tasks.api";
import Task from "./Task";

const Tasks = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    async function fetchAll() {
      const response = await TaskApi.getAll();

      setTasks(response);
    }

    fetchAll();
  }, []);

  if (tasks.length == 0) {
    return <h1>No tasks</h1>;
  }

  return (
    <div className="main">
      {tasks.map((task) => (
        <Task
          key={task.id}
          id={task.id}
          title={task.title}
          description={task.description}
          status={task.status}
          priority={task.priority}
        />
      ))}
    </div>
  );
};

export default Tasks;
