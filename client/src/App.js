import { Route, Routes } from "react-router-dom";
import React from "react";
import About from "./pages/About";
import Home from "./pages/Home";
//import { Login } from "./pages/Login";


const App = () => (

     <Routes>
		<Route path="/" element={<Home />} />
		<Route path="/about/this/site" element={<About />} />
	</Routes>


);



export default App;
