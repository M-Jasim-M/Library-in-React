import React from 'react'
import Main from './Main'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CreateAccount from './Components/CreateAccount-to-sana/CreateAccount';
import Welcometosana from './Components/Welcome-to-sana/Welcometosana';
import Verification from './Components/Verification/Verification';
import Profilestep1 from './Components/Profilestep1/Profilestep1';
import Profilestep2 from './Components/Profilestep2/Profilestep2';

export default function App() {
  return (
    <Router>
        <Routes>
          
          <Route path="/" element={<Main />} />
          <Route path="/createaccount" element={<CreateAccount />} />
          <Route path="/welcome" element={<Welcometosana />} />
          <Route path="/verification" element={<Verification />} />
          <Route path="/profile" element={<Profilestep1 />} />
          <Route path="/profile2" element={<Profilestep2 />} />
      
        </Routes>
    </Router>
  )
}
