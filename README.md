## Plum

Stock portfolio simulator.

---

## TODO
  - Draw company graphs from external data.
  - Update holdings on new transaction
  - Add share purchase limit based on cash.
  - Compare current portfolio value to live value.
  - User authentication

Dependencies:
  - [Node.js](https://nodejs.org)
  - [MongoDB](https://www.mongodb.org)

## Running the app

Install package dependencies:

```bash
npm install
```

Start the database:

```bash
mongod
```

Start the server; I use [Nodemon](https://github.com/remy/nodemon) to restart the server when changes are made:

```bash
nodemon
```

The app will now be running on `http://localhost:3000`