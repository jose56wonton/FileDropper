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
      res.status(500).send({ message: "Sessions retrieval error" });
    } else {
      res.send(sessions);
    }
  });
};

exports.findOne = function(req, res) {
  Session.findById(req.params.sessionId, function(err, session) {
    if (err) {
      res.status(500).send({ message: "Session retrieval error" });
    } else {
      res.send(session);
    }
  });
};

exports.update = function(req, res) {
  Session.findById(req.params.sessionId, function(err, session) {
    if (err) {
      res.status(500).send({ message: "Session not found" });
    }
    session.key = req.body.key;
    session.save(function(err, data) {
      if (err) {
        res.status(500).send({ message: "Session update error" });
      } else {
        res.send(data);
      }
    });
  });
};

exports.delete = function(req, res) {
    Session.remove({_id: req.params.sessionId}, function(err, data) {
        if(err) {
            res.status(500).send({message: "Session deletion error" + req.params.id});
        } else {
            res.send({message: "Session deleted"})
        }
    });
};
