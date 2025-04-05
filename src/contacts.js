import fs from "node:fs/promises";
import path from "node:path";

// const contactsPath = path.join(process.cwd, "src", "db", "contacts.json");
const contactsPath = path.resolve("src", "db", "contacts.json");

async function listContacts() {
  try {
    const allContacts = await fs.readFile(contactsPath, "utf-8");

    const parsed = JSON.parse(allContacts);
    return Array.isArray(parsed) ? parsed : [];

  } catch (error) {
    console.error("Error reading contacts file:", error.message);
    return null;
  }
}

async function getContactById(contactId) {
  const allContacts = await listContacts();

  const contact = allContacts.find((item) => item.id === contactId);

  return contact ? contact : null;
}

async function removeContact(contactId) {
  // ...твій код. Повертає об'єкт видаленого контакту. Повертає null, якщо контакт з таким id не знайдений.
}

async function addContact(name, email, phone) {
  // ...твій код. Повертає об'єкт доданого контакту (з id).
}

export { listContacts, getContactById, removeContact, addContact };