## Plum

Stock portfolio simulator.

---

![Plum Screenshot](https://d13yacurqjgara.cloudfront.net/users/347028/screenshots/2128722/plum-home.png)

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

### TODO
  - Draw company graphs from external data.
  - Update holdings on new transaction.
  - Add share purchase limit based on cash.
  - Compare current portfolio value to live value.
  - Deposit cash to portfolio, after creation.
  - Ability to edit portfolio name.
  - Create new transaction from portfolio view.
  - Responsive styling.
  - User authentication.