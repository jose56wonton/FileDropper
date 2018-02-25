const fs = require("fs");
const  path = require('path');
const SAVE_FOLDER = path.join(`${__dirname}`,`..`,`saves`);

exports.create = function(req, res) {
  if (!req.params.sessionId) {
    res.status(400).send({ message: "Need a valid key for your session" });
  }
  if (!req.files) return res.status(400).send("No files were uploaded.");
  // Gets the file object of the req 
  let file = req.files.file;
  // Create dir if doesn't already exist
  if (!fs.existsSync(`${SAVE_FOLDER}/${req.params.sessionId}`)) {
    fs.mkdirSync(`${SAVE_FOLDER}/${req.params.sessionId}`);
  }
  // Moves files onto the saves/sessionId/ folder
  file.mv(`${SAVE_FOLDER}/${req.params.sessionId}/${file.name}`, function(err) {
    if (err) return res.status(500).send(err);
    res.send("File uploaded!");
  });
};

exports.findOne = function(req, res) {
  if (!req.params.sessionId) {
    res.status(400).send({ message: "Need a valid key for your session" });
  }
  if (!fs.existsSync(`${SAVE_FOLDER}/${req.params.sessionId}`)) {
    res.status(400).send({message: "No files found for given session"})
  }
  // Gets the dir of this user
  const currentPath =  path.join(`${SAVE_FOLDER}/${req.params.sessionId}`)
  // Gets the files for that dir
  const files = fs.readdirSync(currentPath)

  if(!files.length){
    res.status(400).send({message: "No files saved for this sessiono"});
  }
  res.sendFile(currentPath+"/"+ files[0]);

  
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
