import fs from "node:fs/promises";
import path from "node:path";
import { nanoid } from "nanoid";

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

  return contact || null;
}

async function removeContact(contactId) {
  // ...твій код. Повертає об'єкт видаленого контакту. Повертає null, якщо контакт з таким id не знайдений.
}

async function addContact(name, email, phone) {
  if (!name || !email || !phone) {
    console.error("All fields are required!");
    return null;
  }

  const allContacts = await listContacts();

  const newContact = {
    id: nanoid(),
    name,
    email,
    phone,
  };

  allContacts.push(newContact);
  await fs.writeFile(contactsPath, JSON.stringify(allContacts, null, 2));

  return newContact;
}

export { listContacts, getContactById, removeContact, addContact };