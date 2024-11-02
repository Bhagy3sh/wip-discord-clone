// const express = require('express');
// const router = express.Router();
// const { google } = require('googleapis');
// const oauth2Client = require('../config/google');

// const calendar = google.calendar({ version: 'v3', auth: oauth2Client });

// // Function to create a Google Meet link
// router.post('/create-meeting', async (req, res) => {
//   try {
//     const event = {
//       summary: 'Meeting',
//       description: 'A meeting created via API.',
//       start: {
//         dateTime: new Date().toISOString(),
//         timeZone: 'America/Los_Angeles', // Adjust the time zone accordingly
//       },
//       end: {
//         dateTime: new Date(new Date().getTime() + 30 * 60000).toISOString(), // Meeting duration of 30 minutes
//         timeZone: 'America/Los_Angeles',
//       },
//       conferenceData: {
//         createRequest: {
//           requestId: 'some-random-string', // Unique identifier
//           conferenceSolutionKey: {
//             type: 'hangoutsMeet',
//           },
//         },
//       },
//     };

//     const response = await calendar.events.insert({
//       calendarId: 'primary',
//       resource: event,
//       conferenceDataVersion: 1,
//     });

//     const meetingLink = response.data.hangoutLink; // Google Meet link

//     res.status(200).json({ link: meetingLink });
//   } catch (error) {
//     console.error('Error creating meeting:', error);
//     res.status(500).json({ error: 'Error creating meeting' });
//   }
// });

// module.exports = router;
// meet.js
const express = require('express');
const router = express.Router();
const { google } = require('googleapis');
require('dotenv').config(); // Load environment variables from .env file

// Create an OAuth2 client
const oauth2Client = new google.auth.OAuth2(
  process.env.GOOGLE_CLIENT_ID,     // Client ID from .env
  process.env.GOOGLE_CLIENT_SECRET, // Client Secret from .env
  process.env.REDIRECT_URI   // Redirect URI from .env
);

// Create a calendar instance
const calendar = google.calendar({ version: 'v3', auth: oauth2Client });

// Function to create a Google Meet link
router.post('/create-meeting', async (req, res) => {
  try {
    const event = {
      summary: 'Meeting',
      description: 'A meeting created via API.',
      start: {
        dateTime: new Date().toISOString(),
        timeZone: 'America/Los_Angeles', // Adjust the time zone accordingly
      },
      end: {
        dateTime: new Date(new Date().getTime() + 30 * 60000).toISOString(), // Meeting duration of 30 minutes
        timeZone: 'America/Los_Angeles',
      },
      conferenceData: {
        createRequest: {
          requestId: 'some-random-string', // Unique identifier
          conferenceSolutionKey: {
            type: 'hangoutsMeet',
          },
        },
      },
    };

    const response = await calendar.events.insert({
      calendarId: 'primary',
      resource: event,
      conferenceDataVersion: 1,
    });

    const meetingLink = response.data.hangoutLink; // Google Meet link

    res.status(200).json({ link: meetingLink });
  } catch (error) {
    console.error('Error creating meeting:', error);
    res.status(500).json({ error: 'Error creating meeting' });
  }
});

module.exports = router;
