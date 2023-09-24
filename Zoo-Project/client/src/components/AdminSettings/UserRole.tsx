import axios from "axios";
import { useEffect, useState } from "react";
import { User } from "../../interfaces/user.interface";
import { toast } from "react-toastify";

const UserRole = () => {
  const [users, setUsers] = useState<User[] | null>(null);
  const [userId, setUserId] = useState<string>("");
  const [userRole, setUserRole] = useState<string>("");

  console.log(users);

  useEffect(() => {
    const fetchUsers = async () => {
      const response = await axios.get("http://localhost:3000/user");
      setUsers(response.data);
    };
    fetchUsers();
  }, []);

  const handleUpdate = async () => {
    await axios.patch(`http://localhost:3000/user/${userId}/${userRole}`, {});
    toast.success("Successfully updated", {
      position: "top-right",
      autoClose: 2000,
    });

    setUserId("");
    setUserRole("");
  };

  return (
    <div className="update-users-section admin-settings-section">
      <div className="select-field">
        <h3>Update User Role</h3>
        <label htmlFor="user">Select User:</label>
        <select
          onChange={(e) => setUserId(e.target.value)}
          value={userId}
          name="user"
          id="user">
          <option value="">Select user...</option>
          {users?.map((user: User) => (
            <option value={user.id} key={user.id}>
              {user.name}
            </option>
          ))}
        </select>
      </div>
      <div className="select-field">
        <label htmlFor="role">Selet Role:</label>
        <select
          onChange={(e) => setUserRole(e.target.value)}
          value={userRole}
          name="role"
          id="role">
          <option disabled value="">
            Select role...
          </option>
          <option value="admin">Admin</option>
          <option value="user">User</option>
        </select>
      </div>

      <button
        onClick={() => handleUpdate()}
        disabled={!userId || !userRole}
        className="submit-btn">
        Update
      </button>
    </div>
  );
};

export default UserRole;
