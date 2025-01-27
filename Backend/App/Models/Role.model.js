const mongoose = require('mongoose');

const roleSchema = new mongoose.Schema({
    role: {
        type: String,
        required: true,
        unique: true
    },
     name: {
        type: String,
        required: true,
        unique: true
    },
    description: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
},{
    _id: true,
  });

const Role = mongoose.model('Roles', roleSchema);
module.exports = Role;
