const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());

// API STUBS

app.get('/api/users/:userId/profile', (req, res) => {
  const { userId } = req.params;
  console.log(`Fetching profile for user ID: ${userId}`);

  const dummyProfile = {
    user_id: 1,
    full_name: 'Alex Johnson',
    email: 'user@vytal.ai',
    weight: 75.5,
    height: 180,
    dob: '1995-08-15',
    gender: 'Male',
    goal_id: 1,
  };

  res.status(200).json(dummyProfile);
});

app.listen(PORT, () => {
  console.log(`API Stub Server is running on http://localhost:${PORT}`);
});