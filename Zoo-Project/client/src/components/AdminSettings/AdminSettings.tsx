import AssignAnimal from "./AssignAnimal";
import UserRole from "./UserRole";

const AdminSettings = () => {
  const userRole = localStorage.getItem("role");

  if (userRole != "admin") {
    return (
      <div className="not-allowed">
        <h1>You must be admin to view this page!</h1>
      </div>
    );
  }

  return (
    <div className="admin-main">
      <div className="admin-settings">
        <h1>Admin Settings</h1>
        <div className="admin-settings-options">
          <UserRole />
          <AssignAnimal />
        </div>
      </div>
    </div>
  );
};

export default AdminSettings;
