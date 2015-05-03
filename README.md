## Plum

Stock portfolio simulator.

---

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
npm start # node app.js && gulp
```

The app will now be running on `http://localhost:3000`

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
      "_id": "55443688405dc7b5bd27620f",
      "name": "Johnny Depp",
      "username": "jdepp",
      "__v": 0,
      "portfolios": [
        "554593bdff677a27261b8aba",
        "554593cfff677a27261b8abb"
      ],
      "created": "2015-05-02T02:29:28.691Z"
    },

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
    "name": "Johnny Depp",
    "username": "jdepp"
  }
}
```

Response:

```json
{
  "user": {
    "__v": 0,
    "name": "Johnny Depp",
    "username": "jdepp",
    "_id": "55443688405dc7b5bd27620f",
    "created": "2015-05-02T02:29:28.691Z"
  }
}
```

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
      "_id": "554593cfff677a27261b8abb",
      "slug": "blue-chips",
      "name": "Blue Chips",
      "value": 149500,
      "overallReturn": 0.15,
      "owner": "55443688405dc7b5bd27620f",
      "__v": 0,
      "created": "2015-05-03T03:19:43.604Z"
    },

    ...
  ]
}
```

#### GET

Returns a list of all portfolios of a user

##### Example

> GET /api/users/:uq/portfolios

`:uq` can either be a user's `username` or `_id`.
  
Response:

```json
{
  "portfolios": [
    {
      "_id": "554593bdff677a27261b8aba",
      "slug": "small-cap-stocks",
      "name": "Small Cap Stocks",
      "value": 89531,
      "overallReturn": -0.07,
      "owner": "55443688405dc7b5bd27620f",
      "__v": 0,
      "created": "2015-05-03T03:19:25.236Z"
    },
    {
      "_id": "554593cfff677a27261b8abb",
      "slug": "blue-chips",
      "name": "Blue Chips",
      "value": 149500,
      "overallReturn": 0.15,
      "owner": "55443688405dc7b5bd27620f",
      "__v": 0,
      "created": "2015-05-03T03:19:43.604Z"
    }
  ]
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

> GET /api/portfolios/:pq/transactions

`:pq` can either be a portfolio's `slug` or `_id`.

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
    {
      "_id": "5546a87bacfe54e7b13ab23b",
      "value": 1605.45,
      "type": "buy",
      "shares": 33,
      "price": 48.65,
      "portfolio": "554593cfff677a27261b8abb",
      "__v": 0,
      "close": "2015-05-03T23:00:11.475Z",
      "stock": [
        {
          "name": "Microsoft Corporation",
          "ticker": "MSFT",
          "exchange": "NASDAQ"
        }
      ]
    }
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
      "__v": 0,
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
}
```