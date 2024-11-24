// backend/app.js
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');
const CoRRRoute = require('./routes/CoRRRoute');
const CoIRRoute = require('./routes/CoIRRoute');
const BCRRoute = require('./routes/BCRRoute')
const AdminUserRoute = require('./routes/AdminRoute')
const BRRoute = require('./routes/BRRoute');
const GetPermits = require('./routes/GetPermits')

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Routes
app.use('/api/corr', CoRRRoute); 
app.use('/api/coi', CoIRRoute);
app.use('/api/bcrr', BCRRoute );
app.use('/api/adminr', AdminUserRoute);
app.use('/api/br', BRRoute);
app.use('/api/pal', GetPermits)

// MongoDB connection
require('./connection'); 

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
