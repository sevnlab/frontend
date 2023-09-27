import React from 'react';
import { render } from "react-dom";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from "./App";
import './index.css';
// import reportWebVitals from './reportWebVitals';
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

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
