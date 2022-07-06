# Project Set Up
To create `package.json` file and accept default settings: 

```javascript
npm init -y
```

To run node file:

```javascript
node <filename.js>
```

To install packages:
```javascript
npm i <package-name>
```

## Popular Packages
1. express
2. dotenv
3. mongoose
4. nodemon

## Use `dotenv` for environment variables

Create a file named `.env` and put constants inside

For example: 
```
DB_HOST=localhost
DB_USER=admin
DB_PASSWORD=password
PORT=3000
```
Access these variables by calling `process.env.CONSTANT`

```javascript
require('dotenv').config()
const port = process.env.PORT
```

## Use `nodemon` for continuous development
```
npm i nodemon
```
may add -g flag to install nodemon globally

## Use `express` to create server

```javascript
const express = require('express')
const app = express()

// can add routes here
app.get('/', (req, res) => {
    res.send("success")
})

// listen on port
app.listen(process.env.PORT, () => {
    console.log("App is listening on port", process.env.PORT)
})
```

## Use `mongoose` to define schemas

Permitted data types:
- String
- Number
- Date
- Buffer
- Boolean
- Mixed
- ObjectId
- Array
- Decimal128
- Map

Define a schema:
```javascript
import mongoose from 'mongoose'
const { Schema, model } = mongoose

const blog = new Schema({
  title: String,
  slug: String,
  published: Boolean,
  author: String,
  content: String,
  tags: [String],
  createdAt: Date,
  updatedAt: Date,
  comments: [{
    user: String,
    content: String,
    votes: Number
  }]
});
```

Define a model to take on the schema
```javascript
const Blog = mongoose.model('Blog', blog);
export default Blog
```

Connect to MongoDB
```javascript
import mongoose from 'mongoose'
mongoose.connect("mongodb+srv://<username>:<password>@cluster0.eyhty.mongodb.net/myFirstDatabase?retryWrites=true&w=majority")
```

## ES Module vs Common JS
- To use ES modules, need to define `"type": "module"` inside `package.json`
- CommonJS loads modules synchronously
  - `require()` loads modules synchronously, so they are loaded and processed one by one
- ES modules are asynchronous
  - use `import` instead of `require()`