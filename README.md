# JS Local Storage Notes
If we're using localStorage, forget IE 7 and below. Time to move on to modern browsers.
refer to [the MDN web API](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage#Browser_compatibility)

### Checking your browsers local storage
```javascript
console.log(localStorage);
```

### Three basic commands
```javascript
localStorage.setItem("key", "value"); // sets a new object with a key value pair.
localStorage.getItem("key"); // get the localStorage object.
localStorage.removeItem("key"); //remove the localStorage object.
```

### Dealing with arrays in local storage
Currently, local storage only supports strings. Use `JSON.stringify()` and `JSON.parse()`
example
```javascript
var names = ["banana, potato, bacon"]
//setting it
localStorage.setItem("names", JSON.stringify(names));

//getting it
var storedNames = JSON.parse(localStorage.getItem("names"));
console.log(storedNames);
//["banana", "potato", "bacon"];
```
