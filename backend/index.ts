import express from 'express';
import cors from 'cors';

const app = express();
const PORT = process.env.PORT || 3001;

app.use(
  cors({
    origin: 'http://localhost:3000',
  })
);

const API_BASE_URL = 'https://work-test-web-2024-eze6j4scpq-lz.a.run.app/api';

app.get('/restaurants', async (_req, res) => {
  try {
    const response = await fetch(`${API_BASE_URL}/restaurants`);
    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error('Error fetching restaurants:', error);
    res.status(500).json({ error: 'Failed to fetch data' });
  }
});

app.get('/restaurants/:id', async (req, res) => {
  try {
    const response = await fetch(`${API_BASE_URL}/restaurants/${req.params.id}`);
    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error('Error fetching restaurant details:', error);
    res.status(500).json({ error: 'Failed to fetch data' });
  }
});
app.get('/open/:id', async (req, res) => {
  try{
    const response = await fetch(`${API_BASE_URL}/open/${req.params.id}`);
    const data = await response.json();
    res.json(data);
  }
  catch (error) {
    console.error('Error checking restaurant status', error);
    res.status(500).json({ error: 'Failed to fetch data' });
  }
});


app.listen(PORT, () => {
  console.log(`Backend running on http://localhost:${PORT}`);
});
