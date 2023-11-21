const fs = require('fs/promises');

const { join } = require('path');

const path = join(__dirname, '..', 'contacts.json');

const readFile = async () => {
const json = await fs.readFile(path);
 const data = JSON.parse(json);
 return data;
};

const addContact = async (contact) => {
    const { name, lastname, phoneNumber } = contact;
    const json = await readFile();
    const nextId = json.length > 0 ? json[json.length - 1].id + 1 : 1;
    const newContact = {
        id: nextId,
        name,
        lastname,
        phoneNumber
    };
    json.push(newContact);
    await fs.writeFile(path, JSON.stringify(json));
    return newContact;
  };

  const updateContact = async ({id,  name, lastname, phoneNumber }) => {
    const json = await readFile();
    const contactToBeUpdated = json.find((contact) => contact.id === id);
    if (!contactToBeUpdated) {
      return null;
    }
  
    name ? contactToBeUpdated.name = name : contactToBeUpdated.name = contactToBeUpdated.name;
    lastname ? contactToBeUpdated.lastname = lastname : contactToBeUpdated.lastname = contactToBeUpdated.lastname;
    phoneNumber ? contactToBeUpdated.phoneNumber = phoneNumber : contactToBeUpdated.phoneNumber = contactToBeUpdated.phoneNumber;
  
    await fs.writeFile(path, JSON.stringify(json));
    return contactToBeUpdated;
  };

  const deleteContact = async (id) => {
    const json = await readFile();
    const index = json.findIndex((contact) => contact.id === id);
    if (index !== -1) {
      const deletedContact = json.splice(index, 1)[0]; 
      await fs.writeFile(path, JSON.stringify(json));
      return deletedContact;
    }
    return null; 
  };

module.exports = {
    readFile,
    addContact,
    updateContact,
    deleteContact
}