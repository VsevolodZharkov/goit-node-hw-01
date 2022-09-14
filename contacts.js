const fs = require("fs/promises");
const path = require("path");
const contactsPath = path.join(__dirname, "contacts.json");

// TODO: задокументировать каждую функцию
const getAll = async () => {
  const data = await fs.readFile(contactsPath);
  return JSON.parse(data);
};

// function getContactById(contactId) {

// }

// function removeContact(contactId) {

// }

// function addContact(name, email, phone) {

// }
const contFun = {
  getAll
};

module.exports = contFun;