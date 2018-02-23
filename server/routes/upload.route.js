let upload = require('../controller/upload.controller');
module.exports = function(app){
    app.post('/upload/:sessionId', upload.create);
    app.get('/upload/:sessionId', upload.findOne);
    app.put('/upload/:sessionId', upload.update);
    app.delete('/upload/:sessionId', upload.delete);
};