const express = require('express');
const router = express.Router();
const uploadMiddleware = require('../helpers/handlerStorage');
const { createItem, deleteItem } = require('../controllers/storage');

router.post("/",uploadMiddleware.single("myfile"), createItem);
router.delete("/:id", deleteItem); 

module.exports = router;