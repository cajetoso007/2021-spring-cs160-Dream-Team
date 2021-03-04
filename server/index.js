const express = require('express');
const cors = require('cors')
const bodyParser = require('body-parser');
const app = express();

const userRoute = require('./routes/user-routes');
const rentalRoute = require('./routes/rental-routes');

const PORT = 4000;

app.use(cors());
app.use(bodyParser.json())

 
app.use('/api', userRoute);
app.use('/api', rentalRoute);
 
app.listen(PORT, () => {
    console.log("Server running on port 4000")
})