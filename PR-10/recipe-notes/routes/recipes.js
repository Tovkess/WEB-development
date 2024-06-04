const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'public/images');
    },
    filename: (req, file, cb) => {
        cb(null, `${Date.now()}-${file.originalname}`);
    }
});

const upload = multer({ storage });

let recipes = []; 


router.post('/', upload.single('photo'), (req, res) => {
    const recipe = {
        id: recipes.length + 1,
        title: req.body.title,
        ingredients: req.body.ingredients,
        instructions: req.body.instructions,
        photo: req.file ? `/images/${req.file.filename}` : null
    };
    recipes.push(recipe);
    res.status(201).json(recipe);
});


router.get('/', (req, res) => {
    res.json(recipes);
});


router.get('/:id', (req, res) => {
    const recipe = recipes.find(r => r.id === parseInt(req.params.id));
    if (!recipe) return res.status(404).send('Recipe not found');
    res.json(recipe);
});


router.put('/:id', upload.single('photo'), (req, res) => {
    const recipe = recipes.find(r => r.id === parseInt(req.params.id));
    if (!recipe) return res.status(404).send('Recipe not found');

    recipe.title = req.body.title || recipe.title;
    recipe.ingredients = req.body.ingredients || recipe.ingredients;
    recipe.instructions = req.body.instructions || recipe.instructions;
    if (req.file) {
        recipe.photo = `/images/${req.file.filename}`;
    }

    res.json(recipe);
});

router.delete('/:id', (req, res) => {
    const index = recipes.findIndex(r => r.id === parseInt(req.params.id));
    if (index === -1) return res.status(404).send('Recipe not found');

    recipes.splice(index, 1);
    res.status(204).send();
});

module.exports = router;
