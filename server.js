var http = require("http");

var todoList = [
  {
    text: "0 todo",
    completed: true,
  },
  {
    text: "1 todo",
    completed: true,
  },
  {
    text: "2 todo",
    completed: true,
  },
  {
    text: "3 todo",
    completed: true,
  },
  {
    text: "4 todo",
    completed: true,
  },
];

var app = http.createServer(function (req, res) {
  res.setHeader("Content-Type", "application/json");
  res.end(JSON.stringify(todoList));
});

console.log("App running on port 8080");
app.listen(8080);
