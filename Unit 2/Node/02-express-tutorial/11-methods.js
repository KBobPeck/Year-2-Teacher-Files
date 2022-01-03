const express = require("express");
const app = express();
let { people } = require("../data");

//static assets
app.use(express.static("./public"));

//parse form data
//built in middleware function in express that parses
//  incoming requests. if you check req.body without it then you will see
//  that the value is undefined.
app.use(express.urlencoded({ extended: false }));

//parses form data
//this works similarly to the url encoded but handles the json
app.use(express.json());

app.get("/api/people", (req, res) => {
  res.json({ success: true, data: people });
});

app.post("/api/people", (req, res) => {
  console.log(req.body);
  const { name } = req.body;
  if (name) {
    return res.status(201).json({ success: true, person: name });
  }
  // res.send("posted")
  // you can pass a status(200) and see that the try catch doesn't return an error enough though it fails
  res.status(404).json({ success: false, msg: "please provide a name" });
});

//above it for the javascript.html
// below is for the index.html
app.post("/login", (req, res) => {
  console.log(req.body);
  const { name } = req.body;
  if (name) {
    return res.json({ status: 200, data: name });
  }
  res.send(`Please Provide Credentials`);
  // res.send("posted")
});

//PART 1 ABOVE
/* 
The above part brings in the public folder from before and then
handles the index and javascript versions. I placed the js for the
form in a seperate js file in the public folder so we can see that
load alongside the html. the /api/people can be tested by going to 
the URL but the use is in the script.js where we call the data with 
async await.

the get for the api/people is for our testing but then then post
will be for the request from the script.js  
*/
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

//testing postman
app.post("/api/postman/person", (req, res) => {
  const { name } = req.body;
  if (!name) {
    return res
      .status(400)
      .json({ data: [], success: false, msg: "please enter a name" });
  }
  res.status(201).json({ success: true, data: [...people, name] });
});

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

//Put requests
app.put("/api/people/:id", (req, res) => {
  const { id } = req.params;
  const { name } = req.body;
  const person = people.find((person) => person.id === Number(id));

  if (!person) {
    return express.json({ success: false, data: [] });
  }

  const newPeople = people.map((person) => {
    if (person.id === Number(id)) {
      person.name = name;
    }
    return person;
  });

  res.status(202).json({ data: newPeople, success: true });
});

//delete requests
app.delete("/api/people/:id", (req, res) => {
  const { id } = req.params;
  const person = people.find((person) => person.id === Number(id));

  if (!person) {
    return res.status(404).json({ success: false, msg: 'no matching ID found' });
  }

  people = people.filter((person) => {
    return person.id !== Number(id);
  });

  res.status(200).json({ data: people, success: true });
});

app.listen(3000, () => {
  console.log("server listening at port 3000...");
});
