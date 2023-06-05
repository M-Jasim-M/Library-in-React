import React from 'react'
import Main from './Main'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CreateAccount from './Components/CreateAccount-to-sana/CreateAccount';
import Welcometosana from './Components/Welcome-to-sana/Welcometosana';

export default function App() {
  return (
    <Router>
        <Routes>
          
          <Route path="/" element={<Main />} />
          <Route path="/createaccount" element={<CreateAccount />} />
          <Route path="/welcome" element={<Welcometosana />} />
      
        </Routes>
    </Router>
  )
}
