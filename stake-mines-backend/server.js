const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(cors(
  {
    origin:["https://wiz-stake-frontend.vercel.app/"],
    methods:["POST","GET"],
    credentials:true
  }
    
));
app.use(express.json());

// Replace these values with your actual MongoDB connection string and port number
const MONGODB_URI = 'mongodb+srv://programmedgamer123:1AhSHYvnRGhQKUgH@minesstake.ml6ed35.mongodb.net/?retryWrites=true&w=majority&appName=minesstake';
const PORT = 5000;

// Connect to MongoDB
mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected successfully'))
.catch(err => console.error('MongoDB connection error:', err));

// Import routes
const gameRoutes = require('./routes/gameRoutes');

// Use routes
app.use('/api/games', gameRoutes);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
