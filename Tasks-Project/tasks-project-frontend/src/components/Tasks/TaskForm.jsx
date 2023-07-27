import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { TaskApi } from "../../api/tasks.api";

const TaskForm = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [task, setTask] = useState({});
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState("not started");
  const [priority, setPriority] = useState("low");

  if (id) {
    useEffect(() => {
      const fetchTask = async () => {
        if (id) {
          const task = await TaskApi.getById(id);
          setTitle(task.title);
          setDescription(task.description);
          setStatus(task.status);
          setPriority(task.priority);
        }
      };
      fetchTask();
    }, [id]);
  }

  const handleSubmit = () => {
    if (title.length == 0 || description.length == 0) {
      window.alert("Please enter title and description");
      return;
    } else {
      if (id) {
        TaskApi.edit(id, { title, description, status, priority });
        navigate("/");
      } else {
        const newTask = {
          title,
          description,
          status,
          priority,
        };
        TaskApi.create(newTask);
        navigate("/");
      }
    }
  };

  return (
    <div className="form">
      <div className="input">
        <label htmlFor="title">Title:</label>
        <input
          type="text"
          id="title"
          placeholder="Enter title..."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>

      <div className="input">
        <label htmlFor="desc">Description:</label>
        <textarea
          name=""
          id="desc"
          cols="30"
          rows="10"
          placeholder="Add description..."
          value={description}
          onChange={(e) => setDescription(e.target.value)}></textarea>
      </div>

      <div className="input select">
        <label htmlFor="status">Status:</label>
        <select
          name=""
          id="status"
          onChange={(e) => setStatus(e.target.value)}
          value={status}>
          <option value="not started">Not Started</option>
          <option value="in progress">In Progress</option>
          <option value="finished">Finished</option>
        </select>
      </div>

      <div className="input select">
        <label htmlFor="priority">Priority:</label>
        <select
          name=""
          id="priority"
          value={priority}
          onChange={(e) => setPriority(e.target.value)}>
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </select>
      </div>

      <div className="btn-div">
        <button className="btn submit" onClick={() => handleSubmit()}>
          Submit
        </button>
        <button className="btn cancel" onClick={() => navigate("/")}>
          Cancel
        </button>
      </div>
    </div>
  );
};

export default TaskForm;
