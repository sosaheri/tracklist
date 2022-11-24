const fs = require('fs');
const { storageModel } = require('../models');
const { matchedData } = require('express-validator');
const  { handleHttpError } = require('../helpers/handlerError');

const PUBLIC_URL = process.env.PUBLIC_URL;
const MEDIA_PATH = `${__dirname}/../storage`;

const getItems = async (req, res) => {
    const data = await tracksModel.find({});
    
    res.send({data});
};
const getItem = (req, res) => {};
const createItem = async (req, res) => {
    try {

        const { body, file } = req
        const fileData = {
            filename: file.filename,
            url: `${PUBLIC_URL}/${file.filename}`
        }
        console.log(file)
        const data = await storageModel.create(fileData);
        res.send({data})
        
    } catch (e) {
                console.log(e);
        handleHttpError(res, 'ERROR_DELETE_ITEMS')
    }

};
const updateItem = (req, res) => {};
const deleteItem = async (req, res) => {
    try {       
        const { id } = matchedData (req);
        const dataFile = await storageModel.findById(id);
        await storageModel.deleteOne(id);
        console.log(dataFile);
        const filename = dataFile;
        const filePath = `${MEDIA_PATH}/${filename}`;

        fs.unlinkSync(filePath);
        const data = {
            filePath: filePath,
            deleted:1
        }

        res.send({data}); 
    } catch (e) {
        console.log(e);
        handleHttpError(res, 'ERROR_DELETE_ITEMS')
    }
};

module.exports = { getItems, getItem, createItem, updateItem, deleteItem };
