import { program } from "commander";
import {listContacts, getContactById, removeContact, addContact} from "./contacts.js";

program
  .option("-a, --action <type>", "choose action")
  .option("-i, --id <type>", "user id")
  .option("-n, --name <type>", "user name")
  .option("-e, --email <type>", "user email")
  .option("-p, --phone <type>", "user phone");

program.parse(process.argv);

const options = program.opts();

async function invokeAction({ action, id, name, email, phone }) {
  switch (action) {
    case "list":
      const allContacts = await listContacts();

      if (!allContacts || allContacts.length === 0) {
        console.warn("\x1B[31mContacts not found!");
      } else {
        console.table(allContacts);
      }

      break;

    case "get":
      const oneContact = await getContactById(id);

      oneContact ? console.table(oneContact) : console.warn("\x1B[31m Contact not found!");
    
      break;

    case "add":
      const newContact = await addContact(name, email, phone);

      newContact ? console.table(newContact) : console.warn("\x1B[31m Contact not added!");

      break;

    case "remove":
      const removedContact = await removeContact(id);

      removedContact ? console.table(removedContact) : console.warn("\x1B[31m Contact not found!");
    
      break;

    default:
      console.warn("\x1B[31m Unknown action type!");
  }
}

invokeAction(options);
