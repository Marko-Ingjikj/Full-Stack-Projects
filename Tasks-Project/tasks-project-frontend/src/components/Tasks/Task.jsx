import { useNavigate } from "react-router-dom";
import { TaskApi } from "../../api/tasks.api";

const Task = ({ title, description, status, priority, id }) => {
  const handleDelete = (id) => {
    TaskApi.delete(id);
    location.reload();
  };

  const navigate = useNavigate();

  return (
    <div className="task">
      <p>
        <b>{title}</b>
      </p>
      <p>{description}</p>
      <p>{status}</p>
      <div className={`priority ${priority}`}>
        <p>{priority}</p>
      </div>
      <div>
        <button
          className="btn submit task-btn"
          onClick={() => navigate(`/form/${id}`)}>
          Edit
        </button>
        <button
          className="btn cancel task-btn"
          onClick={() => handleDelete(id)}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default Task;
