import fs from "node:fs/promises";
import path from "node:path";

// const contactsPath = path.join(process.cwd, "src", "db", "contacts.json");
const contactsPath = path.resolve("src", "db", "contacts.json");

async function listContacts() {
  const allContacts = await fs.readFile(contactsPath, "utf-8");
  return JSON.parse(allContacts);
}

async function getContactById(contactId) {
  // ...твій код. Повертає об'єкт контакту з таким id. Повертає null, якщо контакт з таким id не знайдений.
}

async function removeContact(contactId) {
  // ...твій код. Повертає об'єкт видаленого контакту. Повертає null, якщо контакт з таким id не знайдений.
}

async function addContact(name, email, phone) {
  // ...твій код. Повертає об'єкт доданого контакту (з id).
}

export { listContacts, getContactById, removeContact, addContact };