exports.create = function(req, res) {
  if (!req.params.sessionId) {
    res.status(400).send({ message: "Need a valid key for your session" });
  }
  // TODO: Need to validate that this session key is real

  if (!req.files) return res.status(400).send("No files were uploaded.");

  // The name of the input field (i.e. "sampleFile") is used to retrieve the uploaded file
  let sampleFile = req.files.sampleFile;

  // Use the mv() method to place the file somewhere on your server
  sampleFile.mv(`../saves/${req.params.sessionId}/`, function(err) {
    if (err) return res.status(500).send(err);

    res.send("File uploaded!");
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
  Session.remove({ _id: req.params.sessionId }, function(err, data) {
    if (err) {
      res
        .status(500)
        .send({ message: "Session deletion error" + req.params.id });
    } else {
      res.send({ message: "Session deleted" });
    }
  });
};
