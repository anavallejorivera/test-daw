// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import ExamTestApp from './ExamTestApp.jsx'
// import './index.css'
// import App from './App.jsx'

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// )
import React from "react";
import ReactDOM from "react-dom/client";
import ExamTestApp from "../src/ExamTestApp.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ExamTestApp />
  </React.StrictMode>
);