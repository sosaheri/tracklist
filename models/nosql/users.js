const mongoose = require("mongoose");
const mongooseDelete = require("mongoose-delete");

const UserScheme = new mongoose.Schema(
    {
        name:{type:String},
        age:{type:Number},
        email:{type:String, unique:true},
        password:{type:String},
        role:{type:["admin", "user"], default:"user"}
    },
    {
        timestamps:true,
        versionKey:false
    }
)

UserScheme.plugin(mongooseDelete, {overrrideMethods: "all"});
module.exports = mongoose.model("users", UserScheme)