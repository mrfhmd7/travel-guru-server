const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

const info = require('./assets/data/data.json');

app.get('/', (req, res) => {
     res.send("Travel Guru is rinning");
});

app.get('/info', (req, res) => {
     res.send(info)
});

app.listen(port, () => {
     console.log(`Travel Guru is running on: ${port}`);
});
