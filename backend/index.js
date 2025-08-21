const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const router = require('./Routes/AuthRouter');
const AuthRouter = require('./Routes/AuthRouter')
const ProductRouter = require('./Routes/ProductsRouter')
require('dotenv').config();
require('./Models/db');

const PORT = process.env.PORT || 8080;

app.use(express.json());
app.use(bodyParser.json());
app.use(cors());
app.use('/auth', AuthRouter)
app.use('/products', ProductRouter)

app.listen(PORT, ()=> {
    console.log(`Server is running in port ${PORT}`)
})