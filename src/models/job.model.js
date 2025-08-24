import mongoose from "mongoose";

const jobschema=new mongoose.Schema({
    title:{
        type:String,
        required:true,
        trim:true
    },
    company:{
        type:String,
        required:true,
    },
    location:{
        type:String,
        required:true
    },
    discription:String,
    salary:Number,
    postedby:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true
    }    
},
{timestamps:true})

export const Job = mongoose.model("Job",jobschema)