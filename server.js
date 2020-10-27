const express = require('express');
const connectDB = require('./config/db');

const app = express();

//Connect database
connectDB();

// init middleware
app.use(express.json({ extended: false }));

app.get('/', (req, res) => res.send('API Running'));

//define routes
app.use('/api/notificationSetting', require('./routes/apis/notificationSetting'));
app.use('/api/manualSale', require('./routes/apis/manualSale'));
app.use('/api/realtimeSetting', require('./routes/apis/realtimeSetting'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));