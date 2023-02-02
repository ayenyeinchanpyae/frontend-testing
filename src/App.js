import React, { Component } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Regsiter from "./pages/authen/Register";
import "./index.css";
import Layout from "./components/helper/Layout";
import Login from "./pages/authen/Login";

function App() {
  return (
    <Layout>
      <Router>
        <div>
          {/* <ul className="App-header">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
        </ul> */}
          <Routes>
            <Route exact path="/" element={<Home />}></Route>
            <Route exact path="/register" element={<Regsiter />}></Route>
            <Route exact path="/login" element={<Login />}></Route>
          </Routes>
        </div>
      </Router>
    </Layout>
  );
}

export default App;
