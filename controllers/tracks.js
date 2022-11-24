const { tracksModel } = require('../models');
const { matchedData } = require('express-validator');
const  { handleHttpError } = require('../helpers/handlerError');

const getItems = async (req, res) => {

    try {
        const data = await tracksModel.find({});
        res.send({data});
        
    } catch (e) {
        handleHttpError(res, 'ERROR_GET_ITEMS')
    }

};

const getItem = (req, res) => {

    try {
       
        
    } catch (e) {
        handleHttpError(res, 'ERROR_GET_ITEM')
    }
};

const createItem = async (req, res) => {
    try {
        const body = matchedData(req);

        // const { body } = req
        // console.log(body)
        const data = await tracksModel.create(body);
        res.send({data})        
    } catch (e) {
        handleHttpError(res, 'ERROR_CREATE_ITEMS')
    }

};
const updateItem = (req, res) => {
    try {       
        
    } catch (e) {
        handleHttpError(res, 'ERROR_UPDATE_ITEM')
    }
};
const deleteItem = (req, res) => {
    try {       
        
    } catch (e) {
        handleHttpError(res, 'ERROR_DELETE_ITEMS')
    }
};

module.exports = { getItems, getItem, createItem, updateItem, deleteItem };