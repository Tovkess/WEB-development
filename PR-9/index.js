
const express = require('express');
const app = express();

const PORT = 3000;

const products = [
    {id: 1, sku : "sku1", name : "product name 1"},
    {id: 2, sku : "sku2", name : "product name 2"},
    {id: 3, sku : "sku3", name : "product name 3"},
    {id: 4, sku : "sku4", name : "product name 4"},
    {id: 5, sku : "sku5", name : "product name 5"}
];


app.get('/', (req, res) => {
    console.log("Request is being processed");
    res.send(`Server port ${PORT}`);
});

app.get('/products', (req, res) => {
    res.send(products);
});

app.listen(PORT, () => {
    console.log(`Local server starts listening on port ${PORT}`);
});