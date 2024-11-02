const { google } = require('googleapis');
const OAuth2 = google.auth.OAuth2;

// Create an OAuth2 client
const oauth2Client = new OAuth2(
  process.env.GOOGLE_CLIENT_ID,
  process.env.GOOGLE_CLIENT_SECRET,
  'http://localhost:5000/auth/google/callback'
);

// Set credentials if using a service account
const { client_email, private_key } = require('./path/to/your/service-account-key.json');
oauth2Client.setCredentials({ client_email, private_key });

module.exports = oauth2Client;
