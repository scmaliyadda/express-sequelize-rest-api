const express = require('express');
const bodyParser = require('body-parser');
const sequelize = require('./models');
const studentRoutes = require('./routes/studentRoutes');

const app = express();
app.use(bodyParser.json());

// Routes
app.use('/students', studentRoutes);

// Sync DB and start server
sequelize.sync().then(() => {
    console.log('Database synced!');
    app.listen(3000, () => console.log('Server running on http://localhost:3000'));
});