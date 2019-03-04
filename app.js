const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, '/')));
app.use('/css', express.static(path.join(__dirname, 'node_modules/bootstrap/dist/css')));
app.use('/js', express.static(path.join(__dirname, 'node_modules/bootstrap/dist/js')));
app.use('/js', express.static(path.join(__dirname, 'node_modules/jquery/dist')));
app.use('/jquery-easing', express.static(path.join(__dirname, 'node_modules/jquery.easing')));
app.use('/fontawesome-free', express.static(path.join(__dirname, 'node_modules/@fortawesome/fontawesome-free')));

app.get('/', (req, res) => {
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
