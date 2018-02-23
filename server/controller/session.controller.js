var Session = require("../models/session.model");

exports.create = function(req, res) {
  if (!req.body.key) {
    res.status(400).send({ message: "Session needs a key" });
  }
  var session = new Session({ key: req.body.key });
  session.save(function(err, data) {
    if (err) {
      res.status(500).send({ message: "Session Creation error" });
    } else {
      res.send(data);
    }
  });
};
exports.findAll = function(req, res) {
  Session.find(function(err, sessions) {
    if (err) {
      res.status(500).send({ message: "Session retrieval error" });
    } else {
      res.send(sessions);
    }
  });
};

exports.findOne = function(req, res) {
  // Find a single note with a noteId
};

exports.update = function(req, res) {
  // Update a note identified by the noteId in the request
};

exports.delete = function(req, res) {
  // Delete a note with the specified noteId in the request
};
