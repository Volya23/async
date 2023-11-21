const express = require('express');

const app = express();

const PORT = 5501;

app.get('/', (req, res) => {
    res.send('Hello, world!')
})

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`); 
})
