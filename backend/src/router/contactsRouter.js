const express = require('express');
const { readFile, addContact, updateContact, deleteContact } = require('../utils/contacts');

const contactsRouter = express.Router();

contactsRouter.get('/', async (_req, res) => {
    const contacts = await readFile()
    res.status(200).send(contacts);
});

contactsRouter.post('/', async (req, res) => {
    const newContact = await addContact(req.body)
    res.status(201).send(newContact)
});

contactsRouter.put('/', async (req, res) => {
    const updatedContact = await updateContact(req.body)
    res.status(201).send(updatedContact)
});

contactsRouter.post('/delete', async (req, res) => {
    const { id } = req.body;
  
    const contactToDelete = await deleteContact(Number(id));
    if (!contactToDelete) {
      return res.status(404).json({ message: 'Contact not found' });
    }

    res.status(204).end();
});
  

module.exports = contactsRouter;