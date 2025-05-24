const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const notificationService = require('./services/notificationService');
const auditMiddleware = require('./utils/auditMiddleware');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());
app.use(auditMiddleware);

// Import routes
const userRoutes = require('./routes/userRoutes');
const dashboardRoutes = require('./routes/dashboardRoutes');
const alertRoutes = require('./routes/alertRoutes');
const collaborationRoutes = require('./routes/collaborationRoutes');

app.use('/api/users', userRoutes);
app.use('/api/dashboards', dashboardRoutes);
app.use('/api/alerts', alertRoutes);
app.use('/api/collaboration', collaborationRoutes);

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI)
    .then(() => app.listen(process.env.PORT, () => console.log('Server running')))
    .catch(err => console.log(err));