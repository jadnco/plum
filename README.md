## Plum

Stock portfolio simulator.

---

Dependencies:
  - [Node.js](https://nodejs.org)
  - [MongoDB](https://www.mongodb.org)
  - [Gulp](http://gulpjs.com)

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

Run the default Gulp task to build files:

```bash
gulp
```

The app will now be running on `http://localhost:3000`

![Plum Screenshot](https://d13yacurqjgara.cloudfront.net/users/347028/screenshots/2128722/plum-home.png)

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

## API

### Users

#### GET

Returns a list of all users

##### Example

> GET /api/users
  
Response:

```json
{
  "users": [
    {
      "_id": "554385e8cd2d66a1562cd7b9",
      "name": "Jaden Dessureault",
      "username": "jadnco",
      "avatar": "http://www.gravatar.com/avatar/ccbbc3448b0c2b0a6aae6500c5e1c4ad",
      "email": "jaden.dessureault@gmail.com",
      "portfolios": [
          "555abecba8387370225707c6",
          "557106c1c6b25f7e33fc0642",
          "5587716a9c392f5353a0562f"
      ],
      "created": "2015-05-01T13:55:52.039Z"
    }

    ...
  ]
}
```

#### POST

Create a new user record

##### Example

> POST /api/users

Request:

```json
{
  "user":{
    "name": "Walter Flores",
    "username": "walt89",
    "email": "walter@example.com"
  }
}
```

Response:

```json
{
  "user": {
    "_id": "559443b15b95cfd61950bb65",
    "name": "Walter Flores",
    "username": "walt89",
    "avatar": "http://www.gravatar.com/avatar/2b29126ce78c689dee1cf01dbdb26da7",
    "email": "walter@example.com",
    "portfolios": [],
    "created": "2015-07-01T19:46:57.273Z"
  }
}
```

---

### User

#### GET

Returns a single user by `username` or `_id`.

##### Example

> GET /api/users/:id
  
Response:

```json
{
  "user": [
    {
      "_id": "554385e8cd2d66a1562cd7b9",
      "name": "Jaden Dessureault",
      "username": "jadnco",
      "avatar": "http://www.gravatar.com/avatar/ccbbc3448b0c2b0a6aae6500c5e1c4ad",
      "email": "jaden.dessureault@gmail.com",
      "portfolios": [
          "555abecba8387370225707c6",
          "557106c1c6b25f7e33fc0642",
          "5587716a9c392f5353a0562f"
      ],
      "created": "2015-05-01T13:55:52.039Z"
    }
  ]
}
```

#### PUT

Update a single user by `username` or `_id`.

##### Example

> PUT /api/users/:id
  
Request:

```json
{
  "user":{
    "username": "jadend"
  }
}
```

Response:

> 200 OK

---

### Portfolios

#### GET

Returns a list of all portfolios

##### Example

> GET /api/portfolios
  
Response:

```json
{
  "portfolios": [
    {
      "_id": "555abecba8387370225707c6",
      "slug": "large-cap-technology",
      "name": "Large Cap Technology",
      "owner": "554385e8cd2d66a1562cd7b9",
      "modified": "2015-06-10T21:59:35.573Z",
      "transactions": [
          "555ac0b224ce427f24044338",
          "555ac18a5d36a08725b602ee",
          "555ac1be5d36a08725b602ef",
          "555e58454997c1e936216fd5",
          "555e58a04997c1e936216fd6"
      ],
      "holdings": [
          {
              "ticker": "AAPL",
              "value": 1562.28,
              "overallReturn": 0.12,
              "percent": 0.25,
              "_id": "5578b3476d90a69e05520a15"
          },
          
          ...
      ],
      "created": "2015-05-19T04:40:43.397Z",
      "overallReturn": 0.15,
      "cash": 0,
      "value": 7799.1
    },

    ...
  ]
}
```

#### POST

Create a new portfolio record

##### Example

> POST /api/portfolios

Request:

```json
{
  "portfolio": {
    "name": "Blue Chips",
    "owner": "554385e8cd2d66a1562cd7b9",
    "cash": 25000
  }
}
```

Response:

```json
{
  "portfolio": {
    "slug": "blue-chips",
    "name": "Blue Chips",
    "owner": "554385e8cd2d66a1562cd7b9",
    "_id": "55944998509e2ef62419471e",
    "transactions": [],
    "holdings": [],
    "created": "2015-07-01T20:12:08.941Z",
    "overallReturn": 0,
    "cash": 25000,
    "value": 25000
  }
}
```

---

### Transactions

#### GET

Returns a list of all transactions

##### Example

> GET /api/transactions
  
Response:

```json
{
  "transactions": [
    {
      "_id": "5546a465acfe54e7b13ab239",
      "value": 1934.25,
      "type": "buy",
      "shares": 15,
      "price": 128.95,
      "portfolio": "554593cfff677a27261b8abb",
      "__v": 0,
      "close": "2015-05-03T22:42:45.355Z",
      "stock": [
        {
          "name": "Apple Inc.",
          "ticker": "AAPL",
          "exchange": "NASDAQ"
        }
      ]
    },
    
    ...
  ]
}
```

#### GET

Returns a list of all transactions of a portfolio

##### Example

> GET /api/portfolios/:id/transactions

`:id` can either be a portfolio's `slug` or `_id`.

Response:

```json
{
  "transactions": [
    {
      "_id": "555ac0b224ce427f24044338",
      "value": 384.08,
      "type": "buy",
      "shares": 8,
      "price": 48.01,
      "portfolio": "555abecba8387370225707c6",
      "close": "2015-05-19T04:48:50.386Z",
      "stock": [
        {
          "name": "Microsoft Corporation",
          "ticker": "MSFT",
          "exchange": "NASDAQ"
        }
      ]
    },

    ...
  ]
}
```

#### GET

Returns a single transaction

##### Example

> GET /api/transactions/:id

Response:

```json
{
  "transaction": {
    "_id": "5546a5fbacfe54e7b13ab23a",
    "value": 1556.8,
    "type": "buy",
    "shares": 32,
    "price": 48.65,
    "portfolio": "554593cfff677a27261b8abb",
    "close": "2015-05-03T22:49:31.556Z",
    "stock": [
      {
        "name": "Microsoft Corporation",
        "ticker": "MSFT",
        "exchange": "NASDAQ"
      }
    ]
  }
}
```