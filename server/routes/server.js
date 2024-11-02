const router = require('express').Router();
const Server = require('../models/Server');

// Create a new server
router.post('/', async (req, res) => {
  const { userId, name } = req.body;
  const server = new Server({ name, owner: userId, channels: ['Announcements', 'Study Material', 'Attendance and Meeting'] });
  await server.save();
  res.status(201).json(server);
});

// Get all servers
router.get('/', async (req, res) => {
  const servers = await Server.find();
  res.json(servers);
});

module.exports = router;
