const mongoose = require('mongoose');
const timeStamps = require('mongoose-timestamps');
const Schema = mongoose.Schema;

const adminSchema=new Schema({
    username:{typr:String,required:true},
    password:{type:String,required:true},

})

module.exports=mongoose.model('admin',adminSchema)