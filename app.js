require('dotenv').config();

const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT;

app.use(cors());
app.use(express.json());

// mongoose.connect(process.env.MONGODB_URI).then(() => {
//   console.log('Connected to DB');
// });

app.listen(PORT, () => console.log(`http://localhost:${PORT}`));
