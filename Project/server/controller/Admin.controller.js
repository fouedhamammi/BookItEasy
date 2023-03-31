const Admin  = require("../models/Admin.model");

module.exports.getAllAdmin=(req, res) => {
    Admin.find({}) 
            .then((AllAdmin)=>res.json(AllAdmin))
            .catch((err) => console.log(err));
}

module.exports.getOneAdmin=(req, res) => {
    Admin.findOne({ _id: req.params.id })
            .then((OneAdmin) => res.json(OneAdmin))
            .catch((err) => console.log(err));
}

module.exports.createAdmin=(req, res) => {
    Admin.create(req.body) 
            .then((newAdmin) => res.json(newAdmin)) 
            .catch((err) => console.log(err));
}
     
module.exports.updateAdmin=(req, res) => {
    Admin.findByIdAndUpdate({ _id: req.params.id }, req.body, {
            new: true, 
            runValidators: true, 
        })
            .then((updateAdmin) => res.json(updateAdmin))
            .catch((err) => console.log(err));
    }

// const Admin = require("../models/Admin.model"); 
// const Admin = require("../models/Admin.model"); 

    module.exports.delete=(req, res) => {
        Admin.deleteOne({ _id: req.params.id })
            .then((deletedId) => res.json(deletedId))
            .catch((err) => console.log(err));
    }


