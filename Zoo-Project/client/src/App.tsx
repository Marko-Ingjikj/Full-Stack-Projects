import { Route, Routes, BrowserRouter } from "react-router-dom";
import Nav from "./components/Nav";
import Animals from "./components/Animals/Animals";
import About from "./components/About";
import Zookeepers from "./components/Zookeepers/Zookeepers";
import Login from "./components/Profile/Login";
import Register from "./components/Profile/Register";

function App() {
  return (
    <>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<About />}></Route>
          <Route path="/Animals" element={<Animals />}></Route>
          <Route path="/zookeepers" element={<Zookeepers />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/register" element={<Register />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
