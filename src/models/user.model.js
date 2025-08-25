

import mongoose  from "mongoose";

const userSchema=new mongoose.Schema(
    {
        username:{
            type:String,
            required:true,
            trim:true

        },
        email:{
            type:String,
            required:true,
            unique:true,
            lowercase:true,
            trim:true
        },
        password:{
            type:String,
            required:true,
        },
         role: {
            type: String,
            enum: ["jobseeker", "employer", "admin"],
            default: "jobseeker"
  }
    },  {
    timestamps:true
  }
)

export const User=mongoose.model("User",userSchema)                     