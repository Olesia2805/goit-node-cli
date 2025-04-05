# 📇 Contact Book CLI

Simple command-line application to manage a contact book.

## ⚙️ Requirements

- Node.js v14+  
- npm v6+

## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/Olesia2805/goit-node-cli.git
```

2. Navigate to the project folder:
```bash
cd goit-node-cli
```

3. Install dependencies:
```bash
npm install
```

## 🚀 Usage

Run the app using:

```bash
node src/index.js --action <action> [options]
```

Or using `npm start`:

```bash
npm start -- --action <action> [options]
```

> Note: The double `--` after `npm start` is required to pass arguments to the script.

---

## 📚 Available Actions

| Action   | Description             | Additional options                              | Short options                     |
|----------|-------------------------|-------------------------------------------------|-----------------------------------|
| `list`   | Lists all contacts      | —                                               | —                                 |
| `get`    | Gets contact by ID      | `--id <contactId>`                              | `-i <contactId>`                  |
| `add`    | Adds a new contact      | `--name <name> --email <email> --phone <phone>` | `-n <name> -e <email> -p <phone>` |
| `remove` | Removes contact by ID   | `--id <contactId>`                              | `-i <contactId>`                  |

---

## 🧪 Examples

### List all contacts
```bash
node src/index.js --action list
```

```bash
npm start -- -a list
```

### Get a contact by ID
```bash
node src/index.js --action get --id Z5sbDlS7pCzNsnAHLtDJd
```

```bash
npm start -- -a get -i Z5sbDlS7pCzNsnAHLtDJd
```

### Add a contact
```bash
node src/index.js --action add --name "Alice Johnson" --email "alice@example.com" --phone "(123) 456-7890"
```

```bash
npm start -- -a add -n "Alice Johnson" -e "alice@example.com" --p "(123) 456-7890"
```

### Remove a contact
```bash
node src/index.js --action remove --id vza2RIzNGIwutCVCs4mCL
```

```bash
npm start -- -a remove -i vza2RIzNGIwutCVCs4mCL
```

---

