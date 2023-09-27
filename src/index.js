import React from 'react';
import { render } from "react-dom";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from "./App";
import './index.css';
import SignIn from "./components/signIn";
import SignUp from "./components/signUp";

const rootElement = document.getElementById("root");
render(
  <Router>
      <Routes>
          <Route path="/" element={<App />} />
          <Route path="signIn" element={<SignIn />} />
          <Route path="signUp" element={<SignUp />} />
      </Routes>
  </Router>, rootElement
);

