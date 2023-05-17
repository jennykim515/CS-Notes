```javascript
// To store data
localStorage.setItem('Name', 'Rahul');

// To store object 
localStorage.setItem('Name', JSON.stringify(obj));

// To retrieve data
localStorage.getItem('Name');

// To retrieve object
const storedObject = JSON.parse(localStorage.getItem('user'));
if (storedObject) {
  // do something
}

// To clear a specific item
localStorage.removeItem('Name');

// To clear the whole data stored in localStorage
localStorage.clear();
```
