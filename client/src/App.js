import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "primereact/resources/themes/lara-light-indigo/theme.css";  //theme
import "primereact/resources/primereact.min.css";                  //core css
import "primeicons/primeicons.css";
import Home from "./view/screens/Home";
import Login from "./view/screens/Signin";
import SignUp from "./view/screens/SignUp";
import SignOut from "./view/screens/Signout";
import NavBar from "./view/components/navbar";
import Footer from "./view/components/footer";
import Info from "./view/screens/ProfileInfo";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./view/styles/style.css";
import "./view/styles/info.css";
import Movies from "./view/screens/movies";
import AddMovie from "./view/screens/addmovie";
import DelMovie from "./view/screens/delmovie";


function App() {
  return (
    <><NavBar /><BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signout" element={<SignOut />} />
        <Route path="/info" element={<Info />} />
        <Route path="/addmovie" element={<AddMovie />} />
        <Route path="/delmovie" element={<DelMovie />} />
      </Routes>
    </BrowserRouter><Footer/></>
  );
}

export default App;
