const express = require('express');
const router = express.Router();
const { validatorCreateItem } = require('../validators/tracks')
const customHeader = require('../middleware/customHeader');
const { getItems, getItem, createItem } = require('../controllers/tracks');

//version 1
// router.get("/tracks", (req,res) => {
//     const data = ['hola', 'mundo'];
    
//     res.send({data});

// })

router.get("/", getItems);
// router.get("/:id", getItem);
router.post("/", validatorCreateItem , customHeader ,createItem);


module.exports = router;