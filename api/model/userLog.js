'use strict';

const mongoose = require('mongoose');

const userLogSchema = new mongoose.Schema({
    email: String,
    lastLogin: Date,
    authToken: { type: String, index: { unique: true } },
});

module.exports = mongoose.model('UserLog', userLogSchema, 'userLogs');