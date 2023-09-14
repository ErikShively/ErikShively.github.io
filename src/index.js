import React from 'react';
import ReactDOM from 'react-dom/client';
import Homepage from './components/New_Homepage';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import './index.css';
import Home from './components/Home';
import Resume from './components/Resume';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import reportWebVitals from './reportWebVitals';
// import { BrowserRouter, Route } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
const link_headers = 1 
const top_link_names = ["Home", "About", "Projects", "Resume", "Contact"]
const top_link_paths = ["/", "/about", "/projects", "/resume", "/contact"]

const bot_link_names = ["Contact", "Email", "GitHub", "LinkedIn"]
const bot_link_paths = ["/contact", "/contact", "/contact", "/contact"]
root.render(
  <React.StrictMode>
    <Homepage/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
