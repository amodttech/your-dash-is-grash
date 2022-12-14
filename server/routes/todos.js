const express = require("express");

// todoRoutes is an instance of the express router.
// We use it to define our routes.
// The router will be added as a middleware and will take control of requests starting with path /todos.
const todoRoutes = express.Router();

// This will help us connect to the database
const dbo = require("../db/conn");

// This help convert the id from string to ObjectId for the _id.
const ObjectId = require("mongodb").ObjectId;

// This section will help you get a list of all the todos.
todoRoutes.route("/todos").get(function (req, res) {
  let db_connect = dbo.getDb("aaronCollections");
  db_connect
    .collection("todos")
    .find({})
    .toArray(function (err, result) {
      if (err) throw err;
      res.json(result);
    });
});

// This section will help you get a single record by id
todoRoutes.route("/todos/:id").get(function (req, res) {
  let db_connect = dbo.getDb();
  let myquery = { _id: ObjectId(req.params.id) };
  db_connect.collection("todos").findOne(myquery, function (err, result) {
    if (err) throw err;
    res.json(result);
  });
});

// This section will help you create a new record.
todoRoutes.route("/todos/add").post(function (req, response) {
  let db_connect = dbo.getDb();
  let myobj = {
    task: req.body.task,
    project: req.body.project,
    priority: req.body.priority,
    due_date: req.body.due_date,
    completed: false,
    date_created: new Date.now(),
    date_modified: new Date.now(),
  };
  db_connect.collection("todos").insertOne(myobj, function (err, res) {
    if (err) throw err;
    response.json(res);
  });
});

// This section will help you update a record by id.
todoRoutes.route("/update/:id").post(function (req, response) {
  let db_connect = dbo.getDb();
  let myquery = { _id: ObjectId(req.params.id) };
  let newvalues = {
    $set: {
      task: req.body.task,
      project: req.body.project,
      priority: req.body.priority,
      due_date: req.body.due_date,
      completed: req.body.completed,
      // date_created: req.body.date_created,
      date_modified: new Date.now(),
    },
  };
  db_connect
    .collection("todos")
    .updateOne(myquery, newvalues, function (err, res) {
      if (err) throw err;
      console.log("1 document updated");
      response.json(res);
    });
});

// This section will help you delete a record
todoRoutes.route("/:id").delete((req, response) => {
  let db_connect = dbo.getDb();
  let myquery = { _id: ObjectId(req.params.id) };
  db_connect.collection("todos").deleteOne(myquery, function (err, obj) {
    if (err) throw err;
    console.log("1 document deleted");
    response.json(obj);
  });
});

module.exports = todoRoutes;
