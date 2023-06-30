import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Routes } from "react-router-dom";
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Signup from './pages/Signup';
import Login from './pages/Login';



function App() {
  const [events, setEvents] = useState([]);

  const route = {
    path: "/",
    component: <Home />,
  };

  useEffect(() => {
    // Fetch events from the backend API
    axios.get('http://localhost:4000')
      .then(response => {
        setEvents(response.data);
      })
      .catch(error => {
        console.error('Error fetching events:', error);
      });
  }, []);

  return (
    <div>
<Router>
      <div>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pages/About" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </Router>

    <div>
      
      {events.map(event => (
            <div key={event.id}>
            <h3>{event.name}</h3>
            <p>Date: {event.date}</p>
        </div>
      ))}
    </div>
    </div>
  );
}

export default App;