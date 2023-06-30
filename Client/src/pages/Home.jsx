import React from 'react';
import  { useEffect, useState } from 'react';
import axios from 'axios';
import { LPBackground_1 } from '../assets/LP-background-1-cover.png';

function Home() {

  const [events, setEvents] = useState([]);

  useEffect(() => {
    // Fetch events from the backend API
    axios.get('http://localhost:3000/events')
      .then(response => {
        setEvents(response.data);
      })
      .catch(error => {
        console.error('Error fetching events:', error);
      });
  }, []);


  return (
    <div>
     

    
        <h1 style={{ color: '#5800ff' }}>Eventify </h1>
        <h2 style={{ color: '#0057ff' }}>Events</h2>

        <img src="LPBackground_1"/>

            {events.map(event => (
                    <div key={event.id}>
                         <h3>{event.name}</h3>
                    <p>Date: {event.date}</p>
         </div>
      ))}
    
    </div>
  );
}

export default Home;
