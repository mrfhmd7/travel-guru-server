const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

app.get('/', (req, res) => {
     res.send("Travel Guru is rinning");
});

app.listen(port, () => {
     console.log(`Travel Guru is running on: ${port}`);
});
