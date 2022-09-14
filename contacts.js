const fs = require("fs/promises");
const path = require("path");
const contactsPath = path.resolve("./db/contacts.json");

// TODO: задокументировать каждую функцию
const getAll = async () => {
  const data = await fs.readFile(contactsPath, 'utf-8');
  return JSON.parse(data);
};

// function getContactById(contactId) {

// }

// function removeContact(contactId) {

// }

// function addContact(name, email, phone) {

// }

module.exports = {
  getAll
};
