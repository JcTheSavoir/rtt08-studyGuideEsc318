const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;
// ---------------------------[Require Stmnts]

app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine())



// ---------------------------[Middleware]

const fruits = require('./models/fruits.js'); 

// ---------------------------[Data]

app.get("/fruits", (req, res) => {
  res.send(fruits);
});
//----below commented app.get was not finished in class, it goes with the file from ./views/Index.jsx
//--- feel free to try and get this to work on your own.

// app.get("/fruits", (req, res) => {
//   res.render('Index', {
//         fruits: fruits
//     });
// });
// ---------------------------------------------[Index =  GET ]

app.get("/fruits/:indexOfFruitsArray", (req, res) => {
  res.render("Show", {
    fruit: fruits[req.params.indexOfFruitsArray]
  })
});
// ---------------------------------------------[Show =  GET ]

// ---------------------------[Routes]--save


app.listen(PORT, () => {
  console.log(`Listening on Port: 3000`);
});
// ---------------------------[Server]