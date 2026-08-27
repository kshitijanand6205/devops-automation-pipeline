const express = require('express');
const app = express();
const PORT = 5000;

app.get('/', (req, res) => {
    res.send('Hello from my DevOps Pipeline! Version 1, with jenkins CI/CD pipelines...');
});

app.listen(PORT, () => {
    console.log(`App running on port ${PORT}`);
});