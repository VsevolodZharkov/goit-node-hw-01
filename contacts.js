const fs = require("fs/promises");
const path = require("path");
const contactsPath = path.resolve("./db/contacts.json");
const { nanoid } = require("nanoid")
// TODO: задокументировать каждую функцию
const getAll = async () => {
  const data = await fs.readFile(contactsPath, 'utf-8');
  return JSON.parse(data);
};

const getContactById = async (contactId) => {
	const data = await getAll();
	const result = data.find(item => item.id === String(contactId));
	return result || null;
}

const addContact = async (name, email, phone) => {
	const data = await getAll();
	const newContact = {
		"id": nanoid(),
    name,
    email,
    phone: phone,
	}
	data.push(newContact)
	await fs.writeFile(contactsPath, JSON.stringify(data, null, 2))
	return newContact;
}

const removeContact = async (contactId) => {
	const data = await getAll();
	const indexContactDelete = data.findIndex(item => item.id === String(contactId));
	const [result] = data.splice(indexContactDelete, 1);
	await fs.writeFile(contactsPath, JSON.stringify(data, null, 2))
	return result;
}
module.exports = {
  getAll,
	getContactById,
	removeContact,
	addContact
};
