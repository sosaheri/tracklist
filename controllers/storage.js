const { storageModel } = require('../models');
const PUBLIC_URL = process.env.PUBLIC_URL;

const getItems = async (req, res) => {
    const data = await tracksModel.find({});
    
    res.send({data});
};

const getItem = (req, res) => {};

const createItem = async (req, res) => {
    const { body, file } = req
    const fileData = {
        filename: file.filename,
        url: `${PUBLIC_URL}/${file.filename}`
    }
    console.log(file)
    const data = await storageModel.create(fileData);
    res.send({data})

};
const updateItem = (req, res) => {};
const deleteItem = (req, res) => {};

module.exports = { getItems, getItem, createItem, updateItem, deleteItem };
