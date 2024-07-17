 import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";

//  pages
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import AppContainer from "./pages/AppContainer";
// components
// import Menu from "./components/menu";

function App() {

  return (
    <div className="App">
      <Routes >
        <Route path="/*"  index element={<AppContainer />}/>
        <Route path="/Login" element={<Login />} />
        <Route path="/Signup" element={<Signup />} />
      </Routes>
    </div>
  );
}

export default App;
