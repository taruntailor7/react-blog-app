import { Route, Routes } from "react-router-dom";
import { Navbar } from "./components/navbar/Navbar.jsx";
import { Register } from "./pages/register/Register.jsx";
import { Login } from "./pages/login/Login.jsx";
import { Settings } from "./pages/settings/Settings.jsx";
import { Home } from "./pages/home/Home.jsx";
import { Single } from "./pages/single/Single.jsx";
import Write from "./pages/write/Write.jsx";


function App() {
  return (
  <>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/register" element={<Register />}></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/single" element={<Single />}></Route>
      <Route path="/settings" element={<Settings />}></Route>
      <Route path="/write" element={<Write />}></Route>
    </Routes>
  </>
  );
}

export default App;
