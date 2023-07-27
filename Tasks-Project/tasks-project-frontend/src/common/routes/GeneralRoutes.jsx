import Layout from "../../components/Layout/Layout";
import TaskForm from "../../components/Tasks/TaskForm";
import Tasks from "../../components/Tasks/Tasks";

const GeneralRoutes = {
  path: "/",
  element: <Layout />,
  children: [
    {
      path: "/",
      element: <Tasks />,
    },
    {
      path: "/form/:id",
      element: <TaskForm />,
    },
    {
      path: "/form",
      element: <TaskForm />,
    },
  ],
};

export default GeneralRoutes;
