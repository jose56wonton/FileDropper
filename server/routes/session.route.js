let session = require('../controller/session.controller');

module.exports = function(app){
    app.post('/session', session.create);
    app.get('/session', session.findAll);
    app.get('/session/:sessionId', session.findOne);
    app.put('/session/:sessionId', session.update);
    app.delete('/session/:sessionId', session.delete);
};