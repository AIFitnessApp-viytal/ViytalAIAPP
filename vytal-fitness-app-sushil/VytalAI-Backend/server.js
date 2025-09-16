const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());

app.post('/api/auth/login', (req, res) => {
  const { email, password } = req.body;

  console.log('Login attempt with:', email, password);

  if (email === 'user@vytal.ai' && password === 'password') {
    res.status(200).json({
      message: 'Login successful!',
      token: 'fake-jwt-token-for-testing',
      user: {
        user_id: 1,
        full_name: 'Alex Johnson',
        email: 'user@vytal.ai',
      },
    });
  } else {
    res.status(401).json({ message: 'Invalid credentials' });
  }
});

app.get('/api/products', (req, res) => {
  console.log('Fetching all products...');
  const dummyProducts = [
    {
      product_id: 1,
      name: 'Smart Watch',
      description: 'Track your fitness and stay connected.',
      price: '129.99',
      image_url: 'https://i.imgur.com/E5OQZkI.png',
      affiliate_link: 'http://example.com/smartwatch',
    },
    {
      product_id: 2,
      name: 'Yoga Mat Pro',
      description: 'High-quality, non-slip yoga mat.',
      price: '45.00',
      image_url: 'https://i.imgur.com/E5OQZkI.png',
      affiliate_link: 'http://example.com/yogamat',
    },
  ];

  res.status(200).json(dummyProducts);
});

app.listen(PORT, () => {
  console.log(`API Stub Server is running on http://localhost:${PORT}`);
});