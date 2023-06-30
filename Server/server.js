const express = require('express');
const app = express();
const cors = require('cors');
const fs = require('fs'); // Include the 'fs' module

app.use(cors());
app.use(express.json());

// Example: Get all events
app.get('/', (req, res) => {
  // Read the JSON file
  fs.readFile('events.json', 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: 'Failed to fetch events' });
    }

    const events = JSON.parse(data);

    // Send the events as a response
    res.json(events);
  });
});

// Example: Create a new event
app.post('/events', (req, res) => {
  // Extract the event data from the request body
  const { name, date } = req.body;

  // Read the JSON file
  fs.readFile('events.json', 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: 'Failed to create event' });
    }

    const events = JSON.parse(data);

    // Generate a unique ID for the new event
    const newEventId = events.length + 1;

    // Create the new event object
    const newEvent = {
      id: newEventId,
      name,
      date
    };

    // Add the new event to the existing events array
    events.push(newEvent);

    // Write the updated events array back to the JSON file
    fs.writeFile('events.json', JSON.stringify(events), (err) => {
      if (err) {
        console.error(err);
        return res.status(500).json({ error: 'Failed to create event' });
      }

      // Send the created event as a response
      res.status(201).json(newEvent);
    });
  });
});

// Start the server
const port = 4000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
