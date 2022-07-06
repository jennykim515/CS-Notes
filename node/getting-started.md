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
2. dotenv: loads environment variables
3. mongoose
4. nodemon

## Using `dotenv` for environment variables

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
