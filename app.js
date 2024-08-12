var dotenv = require('dotenv');
var express = require('express');
var logger = require('./helper/logger');
var requestLogger = require('./helper/requestLogger');
var apiAuth = require('./helper/apiAuthentication');
var cors = require('cors');
const path = require('path');

dotenv.config();

var usersRouter = require('./routes/userRouter');
var groupRouter = require('./routes/groupRouter');
var expenseRouter = require('./routes/expenseRouter');

var app = express();

// Enable CORS for all routes
app.use(cors());

// Parse incoming JSON requests
app.use(express.json());

// Log all incoming requests
app.use(requestLogger);

// API routes with authentication where needed
app.use('/api/users', usersRouter);
app.use('/api/group', apiAuth.validateToken, groupRouter);
app.use('/api/expense', apiAuth.validateToken, expenseRouter);

// Serve static files from the React app in production or staging
if (process.env.NODE_ENV === 'production' || process.env.NODE_ENV === 'staging') {
    app.use(express.static(path.join(__dirname, 'client', 'build')));

    // Handle client-side routing, return index.html for any unknown paths
    app.get('/*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
}

// Handle invalid API routes
app.all('/api/*', (req, res) => {
    logger.error(`[Invalid API Route] ${req.originalUrl}`);
    res.status(404).json({
        status: 'fail',
        message: 'Invalid API path'
    });
});

// Handle invalid client-side routes
app.all('*', (req, res) => {
    logger.error(`[Invalid Route] ${req.originalUrl}`);
    res.status(404).json({
        status: 'fail',
        message: 'Invalid path'
    });
});

// Start the server
const port = process.env.PORT || 3001;
app.listen(port, (err) => {
    if (err) {
        console.error(`Error starting server: ${err}`);
        logger.error(`Error starting server: ${err}`);
    } else {
        console.log(`Server started on PORT | ${port}`);
        logger.info(`Server started on PORT | ${port}`);
    }
});
