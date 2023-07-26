const TaskForm = () => {
  return (
    <div className="form">
      <div className="input">
        <label htmlFor="title">Title:</label>
        <input type="text" id="title" />
      </div>

      <div className="input">
        <label htmlFor="desc">Description:</label>
        <textarea name="" id="desc" cols="30" rows="10"></textarea>
      </div>

      <div className="input">
        <label htmlFor=""></label>
      </div>
    </div>
  );
};

export default TaskForm;
