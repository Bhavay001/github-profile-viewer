import { Route, Routes } from "react-router-dom";
import './App.css';
import ProfilePage from "./Pages/ProfilePage.js";
import Home from "./Pages/Home.js";
const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/profile" element={<ProfilePage/>} />
      </Routes>
    </div>
  );
};

export default App;
