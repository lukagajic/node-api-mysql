const express = require('express');
const PORT = 5500;

const app = express();

const products = require('./controllers/products-controller');

app.use('/products', products);

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});

module.exports = app;
