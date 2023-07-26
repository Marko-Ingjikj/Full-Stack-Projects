const Task = ({ title, description, status, priority }) => {
  return (
    <div className={`task ${priority}`}>
      <p>{title}</p>
      <p>{description}</p>
      <p>{status}</p>
      <p>{priority}</p>
    </div>
  );
};

export default Task;
