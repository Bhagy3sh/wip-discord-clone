// const router = require('express').Router();
// const passport = require('passport');

// router.use(passport.initialize());
// router.use(passport.session());

// router.get('/google', passport.authenticate('google', {
//   scope: ['profile', 'email'],
// }));

// router.get('/google/callback', passport.authenticate('google'), (req, res) => {
//   res.redirect('http://localhost:3000/dashboard'); // redirect to your frontend dashboard
// });

// router.get('/logout', (req, res) => {
//   req.logout();
//   res.redirect('http://localhost:3000/');
// });

// module.exports = router;
require('dotenv').config(); // Load environment variables from .env
const router = require('express').Router();
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;

// Load Google OAuth credentials from .env
const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID;
const GOOGLE_CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET;

// Google OAuth strategy configuration
passport.use(new GoogleStrategy({
  clientID: GOOGLE_CLIENT_ID,
  clientSecret: GOOGLE_CLIENT_SECRET,
  callbackURL: 'http://localhost:5000/auth/google/callback', // Backend callback route
}, (accessToken, refreshToken, profile, done) => {
  // Logic for saving user profile or verifying the user in the database
  return done(null, profile);
}));

// Serialize user information into the session
passport.serializeUser((user, done) => {
  done(null, user);
});

// Deserialize user information from the session
passport.deserializeUser((user, done) => {
  done(null, user);
});

router.use(passport.initialize());
router.use(passport.session());

router.get('/google', passport.authenticate('google', {
  scope: ['profile', 'email'],
}));

router.get('/google/callback', passport.authenticate('google', {
  failureRedirect: 'http://localhost:3000/',
}), (req, res) => {
  // On success, redirect to dashboard
  res.redirect('http://localhost:3000/dashboard');
});

router.get('/logout', (req, res) => {
  req.logout(() => {
    res.redirect('http://localhost:3000/');
  });
});

module.exports = router;
// auth.js

router.get('/current_user', (req, res) => {
  if (req.isAuthenticated()) {
    res.json(req.user); // Return the user if authenticated
  } else {
    res.status(401).json({ error: 'Not authenticated' });
  }
});

module.exports = router;
