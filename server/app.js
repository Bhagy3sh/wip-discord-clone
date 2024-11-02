// // // server/app.js
// // const express = require('express');
// // const mongoose = require('mongoose');
// // const session = require('express-session');
// // const passport = require('passport');
// // const cors = require('cors');
// // const dotenv = require('dotenv');
// // const authRoutes = require('./routes/auth'); // Your authentication routes

// // dotenv.config(); // Load environment variables

// // const app = express();

// // // Middleware
// // app.use(cors());
// // app.use(express.json());
// // app.use(session({
// //     secret: process.env.SESSION_SECRET,
// //     resave: false,
// //     saveUninitialized: false,
// //     cookie: {
// //         secure: false, // Set true if using HTTPS
// //         maxAge: 1000 * 60 * 60 // 1 hour
// //     }
// // }));

// // const helmet = require("helmet");
// // app.use(
// //   helmet({
// //     xFrameOptions: { action: "sameorigin" },
// //   }),
// // );

// // // Passport middleware
// // app.use(passport.initialize());
// // app.use(passport.session());

// // // Connect to MongoDB
// // mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
// //     .then(() => console.log('MongoDB connected'))
// //     .catch(err => console.error(err));

// // // Routes
// // app.use('/auth', authRoutes); // Your authentication routes
// // // Starting the server
// // const PORT = process.env.PORT || 5000;
// // app.listen(PORT, () => {
// //     console.log(`Server is running on port ${PORT}`);
// // });

// // server/app.js
// // const express = require('express');
// // const mongoose = require('mongoose');
// // const session = require('express-session');
// // const passport = require('passport');
// // const cors = require('cors');
// // const dotenv = require('dotenv');
// // const authRoutes = require('./routes/auth'); // Your authentication routes

// // dotenv.config(); // Load environment variables

// // const app = express();

// // // Middleware
// // app.use(cors());
// // app.use(express.json());
// // app.use(session({
// //     secret: process.env.SESSION_SECRET,
// //     resave: false,
// //     saveUninitialized: false,
// //     cookie: {
// //         secure: false, // Set true if using HTTPS
// //         maxAge: 1000 * 60 * 60 // 1 hour
// //     }
// // }));

// // const helmet = require("helmet");
// // app.use(
// //   helmet({
// //     xFrameOptions: { action: "sameorigin" },
// //   }),
// // );

// // // Passport middleware
// // app.use(passport.initialize());
// // app.use(passport.session());

// // // Connect to MongoDB
// // mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
// //     .then(() => console.log('MongoDB connected'))
// //     .catch(err => console.error(err));

// // // Routes
// // app.use('/auth', authRoutes); // Your authentication routes

// // // Additional server code (assuming this is from your existing server.js)
// // const { SpacesServiceClient } = require('@google-apps/meet').v2;
// // const { ConferenceRecordsServiceClient } = require('@google-apps/meet').v2;

// // // Instantiate clients
// // const meetClient = new SpacesServiceClient();
// // const conferenceRecordsClient = new ConferenceRecordsServiceClient();

// // // Starting the server
// // const PORT = process.env.PORT || 5000;
// // app.listen(PORT, () => {
// //     console.log(`Server is running on port ${PORT}`);
// // });

// // // Example API endpoint for creating a meeting
// // app.post('/api/create-meeting', async (req, res) => {
// //     try {
// //         const request = {};
// //         const response = await meetClient.createSpace(request);
// //         const meetingCode = response.meetingCode; // Extract the meeting code
// //         const meetingLink = `https://meet.google.com/${meetingCode}`;
// //         res.status(200).json({ link: meetingLink });
// //     } catch (error) {
// //         console.error('Error creating meeting:', error);
// //         res.status(500).json({ error: 'Failed to create meeting' });
// //     }
// // });

// // // Example API endpoint for fetching participants
// // app.get('/api/participants', async (req, res) => {
// //     const { meetingCode } = req.query; // Retrieve meeting code from query parameters
// //     try {
// //         const request = {
// //             parent: meetingCode,
// //         };
        
// //         const participantsList = [];
// //         const iterable = conferenceRecordsClient.listParticipantsAsync(request);
        
// //         for await (const response of iterable) {
// //             participantsList.push(response); // Assuming response contains participant details
// //         }
        
// //         res.status(200).json({ participants: participantsList });
// //     } catch (error) {
// //         console.error('Error fetching participants:', error);
// //         res.status(500).json({ error: 'Failed to fetch participants' });
// //     }
// // });



// // server/app.js
// const express = require('express');
// const mongoose = require('mongoose');
// const session = require('express-session');
// const passport = require('passport');
// const cors = require('cors');
// const dotenv = require('dotenv');
// const helmet = require('helmet');
// const authRoutes = require('./routes/auth'); // Your authentication routes

// dotenv.config(); // Load environment variables

// const app = express();

// // Middleware
// app.use(cors());
// app.use(express.json());
// app.use(session({
//     secret: process.env.SESSION_SECRET,
//     resave: false,
//     saveUninitialized: false,
//     cookie: {
//         secure: process.env.NODE_ENV === 'production', // Set true if using HTTPS in production
//         maxAge: 1000 * 60 * 60 // 1 hour
//     }
// }));

// app.use(helmet({
//     xFrameOptions: { action: "sameorigin" },
// }));

// // Passport middleware
// app.use(passport.initialize());
// app.use(passport.session());

// // Connect to MongoDB
// mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
//     .then(() => console.log('MongoDB connected'))
//     .catch(err => console.error('MongoDB connection error:', err));

// // Routes
// app.use('/auth', authRoutes); // Your authentication routes

// // Additional server code
// const { SpacesServiceClient } = require('@google-apps/meet').v2;
// const { ConferenceRecordsServiceClient } = require('@google-apps/meet').v2;

// // Instantiate clients
// const meetClient = new SpacesServiceClient();
// const conferenceRecordsClient = new ConferenceRecordsServiceClient();

// // Example API endpoint for creating a meeting
// app.post('/api/create-meeting', async (req, res) => {
//     try {
//         const request = {}; // Add necessary parameters here if required
//         const response = await meetClient.createSpace(request);
//         const meetingCode = response.meetingCode; // Extract the meeting code
//         const meetingLink = `https://meet.google.com/${meetingCode}`;
//         res.status(200).json({ link: meetingLink });
//     } catch (error) {
//         console.error('Error creating meeting:', error);
//         res.status(500).json({ error: 'Failed to create meeting' });
//     }
// });

// // Example API endpoint for fetching participants
// app.get('/api/participants', async (req, res) => {
//     const { meetingCode } = req.query; // Retrieve meeting code from query parameters
//     if (!meetingCode) {
//         return res.status(400).json({ error: 'Meeting code is required' });
//     }

//     try {
//         const request = { parent: meetingCode };
//         const participantsList = [];
//         const iterable = conferenceRecordsClient.listParticipantsAsync(request);
        
//         for await (const response of iterable) {
//             participantsList.push(response); // Assuming response contains participant details
//         }
        
//         res.status(200).json({ participants: participantsList });
//     } catch (error) {
//         console.error('Error fetching participants:', error);
//         res.status(500).json({ error: 'Failed to fetch participants' });
//     }
// });

// // Starting the server
// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => {
//     console.log(`Server is running on port ${PORT}`);
// });


// server/app.js
// const express = require('express');
// const mongoose = require('mongoose');
// const session = require('express-session');
// const passport = require('passport');
// const cors = require('cors');
// const dotenv = require('dotenv');
// const helmet = require("helmet");
// const authRoutes = require('./routes/auth'); // Your authentication routes

// dotenv.config(); // Load environment variables

// const app = express();

// // Middleware
// app.use(cors());
// app.use(express.json());
// app.use(session({
//     secret: process.env.SESSION_SECRET,
//     resave: false,
//     saveUninitialized: false,
//     cookie: {
//         secure: false, // Set true if using HTTPS
//         maxAge: 1000 * 60 * 60 // 1 hour
//     }
// }));

// app.use(helmet({
//     xFrameOptions: { action: "sameorigin" },
// }));

// // Passport middleware
// app.use(passport.initialize());
// app.use(passport.session());

// // Connect to MongoDB
// mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
//     .then(() => console.log('MongoDB connected'))
//     .catch(err => console.error('MongoDB connection error:', err));

// // Routes
// app.use('/auth', authRoutes); // Your authentication routes

// // Google Meet API clients
// const { SpacesServiceClient, ConferenceRecordsServiceClient } = require('@google-apps/meet').v2;

// // Instantiate clients
// const meetClient = new SpacesServiceClient();
// const conferenceRecordsClient = new ConferenceRecordsServiceClient();

// // Example API endpoint for creating a meeting
// app.post('/api/create-meeting', async (req, res) => {
//     try {
//         const request = {};
//         const response = await meetClient.createSpace(request);
//         const meetingCode = response.meetingCode; // Extract the meeting code
//         const meetingLink = `https://meet.google.com/${meetingCode}`;
//         res.status(200).json({ link: meetingLink });
//     } catch (error) {
//         console.error('Error creating meeting:', error);
//         res.status(500).json({ error: 'Failed to create meeting' });
//     }
// });

// // Example API endpoint for fetching participants
// app.get('/api/participants', async (req, res) => {
//     const { meetingCode } = req.query; // Retrieve meeting code from query parameters
//     try {
//         const request = {
//             parent: meetingCode,
//         };
        
//         const participantsList = [];
//         const iterable = conferenceRecordsClient.listParticipantsAsync(request);
        
//         for await (const response of iterable) {
//             participantsList.push(response); // Assuming response contains participant details
//         }
        
//         res.status(200).json({ participants: participantsList });
//     } catch (error) {
//         console.error('Error fetching participants:', error);
//         res.status(500).json({ error: 'Failed to fetch participants' });
//     }
// });

// // List All Conferences
// app.get('/api/conferences', async (req, res) => {
//     try {
//         const request = {};
//         const iterable = conferenceRecordsClient.listConferenceRecordsAsync(request);
        
//         const conferences = [];
//         for await (const response of iterable) {
//             conferences.push(response);
//         }
        
//         res.status(200).json(conferences);
//     } catch (error) {
//         console.error('Error fetching conferences:', error);
//         res.status(500).send('Internal Server Error');
//     }
// });

// // Get Specific Conference
// app.get('/api/conferences/:conferenceName', async (req, res) => {
//     const { conferenceName } = req.params;

//     try {
//         const request = { name: conferenceName };
//         const response = await conferenceRecordsClient.getConferenceRecord(request);
//         res.status(200).json(response);
//     } catch (error) {
//         console.error('Error fetching conference:', error);
//         res.status(500).send('Internal Server Error');
//     }
// });

// // List Participants for a Conference
// app.get('/api/conferences/:conferenceName/participants', async (req, res) => {
//     const { conferenceName } = req.params;

//     try {
//         const request = { parent: conferenceName };
//         const iterable = conferenceRecordsClient.listParticipantsAsync(request);
        
//         const participants = [];
//         for await (const response of iterable) {
//             participants.push(response);
//         }
        
//         res.status(200).json(participants);
//     } catch (error) {
//         console.error('Error fetching participants:', error);
//         res.status(500).send('Internal Server Error');
//     }
// });

// // Get Specific Participant
// app.get('/api/conferences/:conferenceName/participants/:participantName', async (req, res) => {
//     const { participantName } = req.params;

//     try {
//         const request = { name: participantName };
//         const response = await conferenceRecordsClient.getParticipant(request);
//         res.status(200).json(response);
//     } catch (error) {
//         console.error('Error fetching participant:', error);
//         res.status(500).send('Internal Server Error');
//     }
// });

// // List Participant Sessions
// app.get('/api/conferences/:conferenceName/participants/:participantName/sessions', async (req, res) => {
//     const { conferenceName, participantName } = req.params;

//     try {
//         const request = { parent: `conferenceRecords/${conferenceName}/participants/${participantName}` };
//         const iterable = conferenceRecordsClient.listParticipantSessionsAsync(request);
        
//         const sessions = [];
//         for await (const response of iterable) {
//             sessions.push(response);
//         }
        
//         res.status(200).json(sessions);
//     } catch (error) {
//         console.error('Error fetching participant sessions:', error);
//         res.status(500).send('Internal Server Error');
//     }
// });

// // Starting the server
// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => {
//     console.log(`Server is running on port ${PORT}`);
// });



const express = require('express');
const mongoose = require('mongoose');
const session = require('express-session');
const passport = require('passport');
const cors = require('cors');
const dotenv = require('dotenv');
const helmet = require("helmet");
const { google } = require('googleapis'); // Import Google APIs
const authRoutes = require('./routes/auth'); // Your authentication routes

dotenv.config(); // Load environment variables

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
        secure: false, // Set true if using HTTPS
        maxAge: 1000 * 60 * 60 // 1 hour
    }
}));

app.use(helmet({
    xFrameOptions: { action: "sameorigin" },
}));

// Passport middleware
app.use(passport.initialize());
app.use(passport.session());

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.error('MongoDB connection error:', err));

// Routes
app.use('/auth', authRoutes); // Your authentication routes

// Google Meet API clients
const { SpacesServiceClient, ConferenceRecordsServiceClient } = require('@google-apps/meet').v2;

// Instantiate clients
const meetClient = new SpacesServiceClient();
const conferenceRecordsClient = new ConferenceRecordsServiceClient();

// Example API endpoint for creating a meeting
app.post('/api/create-meeting', async (req, res) => {
    try {
        const request = {};
        const response = await meetClient.createSpace(request);
        const meetingCode = response.meetingCode; // Extract the meeting code
        const meetingLink = `https://meet.google.com/${meetingCode}`;
        res.status(200).json({ link: meetingLink });
    } catch (error) {
        console.error('Error creating meeting:', error);
        res.status(500).json({ error: 'Failed to create meeting' });
    }
});

// Google OAuth 2.0 setup
const oauth2Client = new google.auth.OAuth2(
    process.env.GOOGLE_CLIENT_ID,
    process.env.GOOGLE_CLIENT_SECRET,
    process.env.REDIRECT_URI // Update with your redirect URI
);

// Set the credentials for the user
oauth2Client.setCredentials({
    refresh_token: process.env.GOOGLE_REFRESH_TOKEN,
});

// Create a new calendar event
app.post('/api/create-event', async (req, res) => {
    const event = {
        summary: req.body.summary,
        location: req.body.location,
        description: req.body.description,
        start: {
            dateTime: req.body.start.dateTime,
            timeZone: req.body.start.timeZone,
        },
        end: {
            dateTime: req.body.end.dateTime,
            timeZone: req.body.end.timeZone,
        },
        attendees: req.body.attendees,
        reminders: {
            useDefault: false,
            overrides: [
                { method: 'email', minutes: 24 * 60 },
                { method: 'popup', minutes: 10 },
            ],
        },
    };

    try {
        const calendar = google.calendar({ version: 'v3', auth: oauth2Client });
        const response = await calendar.events.insert({
            calendarId: 'primary',
            resource: event,
            sendUpdates: 'all',
        });
        res.status(201).send(`Event created: ${response.data.htmlLink}`);
    } catch (error) {
        console.error('Error creating event:', error);
        res.status(500).send('Error creating event');
    }
});

// Other routes for Google Meet API (existing code)

// Starting the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

