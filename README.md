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

### HTTP Methods

#### GET

Returns a list of all users

##### Example

> GET /api/users
  
Response:

```json
{
  "users": [
    {
      "_id": "5542d6371cc1a25e385b6ff8",
      "name": "John Smithy",
      "username": "john",
      "__v": 0,
      "created": "2015-05-01T01:26:15.939Z"
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