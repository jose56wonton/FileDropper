const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SessionSchema = new Schema({
    key: String,
    created_at: Date
});

module.exports = mongoose.model("Session", SessionSchema);
