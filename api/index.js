const express = require('express');

const app = express();

app.get('/', (req, resp ) => {
    return console.log('ok');
});

app.listen(3000);