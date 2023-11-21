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

contactsRouter.put('/:id', async (req, res) => {
    const id = Number(req.params.id)
    const updatedContact = await updateContact(id, req.body)
    res.status(201).send(updatedContact)
});

contactsRouter.delete('/:id', async (req, res) => {
    const { id } = req.params;
  
    const contactToDelete = await deleteContact(Number(id));
    if (!contactToDelete) {
      return res.status(404).json({ message: 'Contact not found' });
    }

    res.status(204).end();
});
  

module.exports = contactsRouter;