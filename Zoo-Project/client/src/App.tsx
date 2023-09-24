import { Route, Routes, BrowserRouter } from "react-router-dom";
import Nav from "./components/Nav";
import Animals from "./components/Animals/Animals";
import About from "./components/About";
import Zookeepers from "./components/Zookeepers/Zookeepers";
import Login from "./components/Profile/Login";
import Register from "./components/Profile/Register";
import { AuthProvider } from "./common/AuthContext";
import ZookeeperForm from "./components/Zookeepers/ZookeeperForm";
import AnimalForm from "./components/Animals/AnimalForm";
import AdminSettings from "./components/AdminSettings/AdminSettings";

function App() {
  return (
    <>
      <AuthProvider>
        <BrowserRouter>
          <Nav />
          <Routes>
            <Route path="/" element={<About />}></Route>
            <Route path="/Animals" element={<Animals />}></Route>
            <Route path="/zookeepers" element={<Zookeepers />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/register" element={<Register />}></Route>
            <Route
              path="/zookeeper-form/:id?"
              element={<ZookeeperForm />}></Route>
            <Route path="/animal-form/:id?" element={<AnimalForm />}></Route>
            <Route path="/admin-settings" element={<AdminSettings />}></Route>
            <Route
              path="/*"
              element={<h1 className="not-allowed">Page not found</h1>}></Route>
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </>
  );
}

export default App;
