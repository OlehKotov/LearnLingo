import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "../pages/Home/Home";
import Teachers from "../pages/Teachers/Teachers";
import Favorites from "../pages/Favorites/Favorites";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/teachers" element={<Teachers />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="*" element={<Home />} />
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
