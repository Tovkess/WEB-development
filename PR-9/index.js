
const express = require('express');
const app = express();

app.use(express.json());//new layer when req is in pipeline gets to middle layer, converts data from body to json
const PORT = 5000;

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

app.get('/api/products', (req, res) => {
    res.send(products);
});

app.get('/api/products/.id/:sku', (req, res) => {
    res.send(req.params.sku); 
});

app.get('/api/products', (request, response) => {
    const product = products.find(item => item.id == request.params.id);
    if (!product) {
        response.status(404).send(`Product with id: $(request.params.id) not found`);
        return;
    }
    response.send(product);
});

app.post('/api/products', (req, res) => {//створювати елемент і додавати його на пост
const product = {
    id: id,
    sku: "sku"+ id, 
    name: req.body.name
};
products.push(product);//or pop
res.send(product);
 }); 


app.listen(PORT, () => {
    console.log(`Local server starts listening on port ${PORT}`);
});