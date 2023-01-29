const express = require('express');
const router = express.Router();

const contactsController = require('../controllers/contacts');

router.get('/',
// #swagger.summary = 'return all contacts from db'
// #swagger.description = 'return all contacts from db'
contactsController.getContacts);

router.get('/:id', 
// #swagger.summary = 'return all contact from db using id'
// #swagger.description = 'return all contact from db using id'
contactsController.getContact);

router.post('/', 
// #swagger.summary = 'add new contact to db'
// #swagger.description = 'add new contact to db'
contactsController.createContact);

router.put('/:id', 
// #swagger.summary = 'update contact in db using id'
// #swagger.description = 'update contact in db using id'
contactsController.updateContact);

router.delete('/:id', 
// #swagger.summary = 'delete contact in db using id'
// #swagger.description = 'delete contact in db using id'
contactsController.deleteContact);

module.exports = router;