import mongoose from "mongoose";
import bcrypt from 'bcryptjs';
 const userschema=mongoose.Schema({
    name:{type:String,required:true},
    email:{type:String,required:true},
    password:{type:String,required:true},
    about:{type:String},
    tags:{type:[String]},
    joinedon:{type:Date,default:Date.now},
    resetPasswordToken: String,
    resetPasswordExpires: Date,
 })

 userschema.pre('save', async function(next) {
   if (this.isModified('password')) {
       this.password = await bcrypt.hash(this.password, 10);
   }
   next();
});

 export default mongoose.model("User",userschema)