// src/App.js
import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Library from "./pages/Library";
import Gallery from "./pages/Gallery";
import Impact from "./components/common/Impact";
import Footer from "./components/common/Footer";


const App = () => {
  return (
<div>
  <Routes>
    <Route path="/" element={<Home/>}></Route>
    <Route path="/library" element={<Library/>}/>
    <Route path="/gallery" element={<Gallery/> }/>
  </Routes>
  <Impact/>
  <Footer/>
</div>
  );
};

export default App;
