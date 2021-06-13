const express = require('express');
const app = express();
const path = require('path');
require('dotenv').config();


app.use(express.json());
app.use(express.static('./public'));
app.use(express.static('./jsFiles'));



const port = process.env.PORT || 1000;
app.listen(port, ()=> console.log(`listening on port: ${port}`));