const mongoose = require("mongoose");
const {Schema, model} = mongoose;

const UserSchema = new Schema({
    username: {type:String, required:true, min : 4, unique:true},
    password: {type:String, required:true},
    name:{type:String, required : true},
    college:{type:String},
    yearOfStudy :{type:String},
    limit: {type:Number},
    balance: {type: Number, default: 0},
    lendingTransactions : [{type: Schema.Types.ObjectId, ref:"lendingTransaction"}],
    expenseTransactions : [{type: Schema.Types.ObjectId, ref: "expenseTransaction"}],
    incomeTransactions : [{type: Schema.Types.ObjectId, ref: "incomeTransaction"}],
    reminders : [{type: Schema.Types.ObjectId, ref: "reminder"}]
});

const UserModel = model('User', UserSchema);

module.exports = UserModel;
