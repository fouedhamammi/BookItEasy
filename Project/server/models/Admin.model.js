const mongoose = require("mongoose");
const AdminSchema = new mongoose.Schema(
    {
        Email: {
            type: String,
            required:[true,'Email is required'],
        },
        Pasword: {
            type: String,
            required:[true,'Pasword is required'],
        },
        Halls:{
            
        }
      
    },
    { timestamps: true }, 
);
const Admin = mongoose.model("Admin", AdminSchema);
module.exports = Admin;