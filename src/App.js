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
import Dash from './Components/Dashboard/Dash/Dash';
import Book1 from './Components/Dashboard/Books1/Book1';
import Book2 from './Components/Dashboard/Book2/Book2';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import Services from './Components/Services/Services';
import Book3 from './Components/Dashboard/Book3/Book3';
import Book4 from './Components/Dashboard/Book4/Book4';
import Book5 from './Components/Dashboard/Book5/Book5';
import Book6 from './Components/Dashboard/Book6/Book6';
import Book7 from './Components/Dashboard/Book7/Book7';
import Book8 from './Components/Dashboard/Book8/Book8';
import Book9 from './Components/Dashboard/Book9/Book9';
import FavoritesList from './Components/Fav/Favorite';
import Addbook from './Components/Addbook/Addbook';

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
{/* this is the children routing in dashboard */}
          <Route path="/dash" element={<Dash/>} >
          <Route path="book1" element={<Book1/>} />
          <Route path="book2" element={<Book2/>} />
          <Route path="book3" element={<Book3/>} />
          <Route path="book4" element={<Book4/>} />
          <Route path="book5" element={<Book5/>} />
          <Route path="book6" element={<Book6/>} />
          <Route path="book7" element={<Book7/>} />
          <Route path="book8" element={<Book8/>} />
          <Route path="book9" element={<Book9/>} />
          <Route path="fav" element={<FavoritesList/>} />
          </Route>

          <Route path="/about" element={<About/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/services" element={<Services/>} />
          <Route path="/form" element={<Addbook/>} />
        </Routes>
    </Router>
  )
}
