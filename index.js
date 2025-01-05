const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const bcrypt = require('bcryptjs');
const config = require('./config');
const app = express();

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');
app.use(express.static('public')); // Serve static files from the 'public' folder

// MongoDB connection
mongoose
  .connect(config.mongodb.uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('Failed to connect to MongoDB:', err));

// Define a User schema and model
const User = mongoose.model(
  'users',
  new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
  })
);

// Serve the login page
app.get('/', (req, res) => {
  res.render('login', { errorMessage: null }); // Initial render with no error
});

// Serve the register page
app.get('/register', (req, res) => {
  const error = req.query.error;
  let errorMessage = null;

  if (error === 'not-registered') {
    errorMessage = 'User not registered. Please create an account.';
  } else if (error === 'already-exists') {
    errorMessage = 'Username already exists. Please choose another.';
  }

  res.render('register', { errorMessage });
});

// Handle login form submission
app.post('/login', async (req, res) => {
    const { username, password } = req.body;
  
    if (username.length < 3 || password.length < 6) {
      return res.render('login', {
        errorMessage: 'Username should be at least 3 characters and password at least 6 characters.',
      });
    }
  
    const user = await User.findOne({ username: username.toLowerCase() }); // Normalize username for comparison
  
    if (user && (await bcrypt.compare(password, user.password))) {
      // Successful login
      return res.render('dashboard', { username: user.username });
    } else {
      // Redirect to register page with message if not registered
      return res.redirect('/register?status=not-registered');
    }
  });
  

  app.post('/register', async (req, res) => {
    const { username, password } = req.body;

    // Check if the username and password are valid
    if (username.length < 3 || password.length < 6) {
        return res.render('register', { 
            errorMessage: 'Username should be at least 3 characters and password should be at least 6 characters.' 
        });
    }

    // Convert username to lowercase for case-insensitive comparison
    const normalizedUsername = username.toLowerCase();

    // Check if a user already exists with the same username (case-insensitive)
    const existingUser = await User.findOne({ username: normalizedUsername });

    if (existingUser) {
        // Pass error as query parameter to show modal with a specific message
        return res.redirect('/register?status=exists&username=' + encodeURIComponent(normalizedUsername));
    }

    // Hash the password before saving
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user with the normalized (lowercase) username
    const newUser = new User({ username: normalizedUsername, password: hashedPassword });
    await newUser.save();

    // Log the registered username in the terminal
    console.log(`New user registered: ${normalizedUsername}`);  // This will log the username to your terminal

    // Redirect to register page with success status
    return res.redirect('/register?status=success');
});



// Handle unexpected errors globally
app.use((err, req, res, next) => {
  console.error('Unexpected error:', err.message);
  res.status(500).send('Something went wrong. Please try again later.');
});

// Start the server
const port = 8081;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
