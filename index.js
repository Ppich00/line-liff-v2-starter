const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const myLiffId = process.env.MY_LIFF_ID || '1655815879-4y0Zv3A6';

app.use(express.static('public'));

app.get('/send-id', function (req, res) {
    res.json({ id: myLiffId });
});

app.listen(port, () => console.log(`app listening on port ${port}!`));