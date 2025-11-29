const express = require('express');
const app = express();
const prisma = require('./prisma');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

app.use(express.json());

// Authentication middleware
app.use(async (req, res, next) => {
  const token = req.headers['authorization'];
  if (!token) return res.status(401).json({ error: 'Unauthorized' });
  try {
    const decoded = jwt.verify(token, process.env.SECRET_KEY);
    req.user = decoded;
    next();
  } catch (err) {
    return res.status(401).json({ error: 'Invalid token' });
  }
});

// API endpoints
app.get('/surf-camps', async (req, res) => {
  const surfCamps = await prisma.surfCamp.findMany();
  res.json(surfCamps);
});

app.get('/surf-camps/:id', async (req, res) => {
  const id = req.params.id;
  const surfCamp = await prisma.surfCamp.findUnique({ where: { id: parseInt(id) } });
  if (!surfCamp) return res.status(404).json({ error: 'Surf camp not found' });
  res.json(surfCamp);
});

app.post('/surf-camps', async (req, res) => {
  const { name, location, price, rating } = req.body;
  const surfCamp = await prisma.surfCamp.create({ data: { name, location, price, rating } });
  res.json(surfCamp);
});

app.put('/surf-camps/:id', async (req, res) => {
  const id = req.params.id;
  const { name, location, price, rating } = req.body;
  const surfCamp = await prisma.surfCamp.update({ where: { id: parseInt(id) }, data: { name, location, price, rating } });
  res.json(surfCamp);
});

app.delete('/surf-camps/:id', async (req, res) => {
  const id = req.params.id;
  await prisma.surfCamp.delete({ where: { id: parseInt(id) } });
  res.json({ message: 'Surf camp deleted' });
});

app.post('/bookings', async (req, res) => {
  const { surfCampId, userId, startDate, endDate } = req.body;
  const booking = await prisma.booking.create({ data: { surfCampId, userId, startDate, endDate } });
  res.json(booking);
});

app.get('/bookings/:id', async (req, res) => {
  const id = req.params.id;
  const booking = await prisma.booking.findUnique({ where: { id: parseInt(id) } });
  if (!booking) return res.status(404).json({ error: 'Booking not found' });
  res.json(booking);
});

// Start server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});