const express = require('express');
const router = express.Router();
const { validatorCreateItem, validatorGetItem } = require('../validators/tracks')
const customHeader = require('../middleware/customHeader');
const authMiddleware = require('../middleware/session');
const { getItems, getItem, createItem, updateItem, deleteItem } = require('../controllers/tracks');

//version 1
// router.get("/tracks", (req,res) => {
//     const data = ['hola', 'mundo'];
    
//     res.send({data});

// })

router.get("/", authMiddleware, getItems);
router.get("/:id",validatorGetItem , getItem); //para pasar mas variables seguir este ejemplo /:id/:var1/:var2
router.put("/:id",validatorGetItem , validatorCreateItem , updateItem); 
router.post("/", validatorCreateItem , customHeader ,createItem); //el customHeader es un middleware que revisa el header en este caso para saber si ejecuta o no la ruta
router.delete("/:id",validatorGetItem , deleteItem); 


module.exports = router;