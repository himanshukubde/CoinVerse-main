const mongoose = require('mongoose');

const WalletRecharge = new mongoose.Schema({
   admin_Id: {
        type: mongoose.Schema.Types.ObjectId,
       
    },
    user_Id: {
        type: mongoose.Schema.Types.ObjectId,
       
    },
    recharge: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    multiplelimit: {
        type: Date,
        default: Date.now
    }

},{
    _id: true,
  });

const Role = mongoose.model('WalletRecharge',WalletRecharge);
module.exports = Role;
