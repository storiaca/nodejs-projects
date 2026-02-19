// The address of this server connected to the network is:
// URL -> http://localhost:8383
// IP -> 127.0.0.1:8383
const express = require("express");
const app = express();
const PORT = 8383;

// ENDPOINT - HTTP Verbs (method) && Routes
// The method informs the nature of request and the route is a further subdirectory (basically we direct the request to the body of code to respond appropriately, and these loactions or  routes are called endpoints)

let data = {
  name: "Aleksandar"
}

// Type 1 - Website endpoints (these endpoints are for sending back html and they typically come when a user enters a url in a browser)
app.get("/", (req, res) => {
  // this is endpoint number 1 - /
  // console.log("Yay I hit an endpoint", req.method);
  // res.sendStatus(201)
  res.send('<h1>Homepage</h1>')
});

app.get('/dashboard', (req, res) => {
  // console.log('Ohh now I hit the /dahsboard endpoint');
  res.send('<h1>Dashboard</h1>')  
})

// Type 2 - API endpoints (non visual)

// CRUD - Create(POST) - Read(GET) - Update(PUT) and Delete(DELETE)
app.get('/api/data', (req, res) => {
  console.log('This one was for data');
  res.send(data)
})

app.listen(PORT, () => console.log(`Server has started on: ${PORT}`));
