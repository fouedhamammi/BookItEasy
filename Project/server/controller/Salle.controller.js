const Salle = require('../models/Salle.models');



///////////// Create New Salle


module.exports.CreateSalle = (req, res) => {
  Salle.create(req.body)
    .then((salle) => {
      res.json({ salle });
    })
    .catch((err) => res.status(400).json(err));
};


//////////////// Get All Salle


module.exports.GetAllSalles = (req, res) => {
  Salle.find()
    .then((salles) => res.json(salles ))
    .catch((err) => res.status(400).json({ msg: 'Something went wrong', err }));
};


////////////////// Get One Salle  


module.exports.GetOneSalle = (req, res) => {
  Salle.findOne({ _id: req.params.id })
    .then((salle) => res.json(salle ))
    .catch((err) => res.status(400).json({ err }));
};


///////////////////// Delete One Salle


module.exports.DeleteSalle = (req, res) => {
  Salle.deleteOne({ _id: req.params.id })
  .then((result) => res.json(result))
  .catch((err) => res.status(400).json({ msg: 'Something went wrong', err }));
};


///////////////// UPDATE Salle



module.exports.EditSalle = (req, res) => {
  Salle.findOneAndUpdate({ _id: req.params.id }, req.body, {
    new: true,
    runValidators: true,
  })
    .then((updatedSalle) => res.json({ updatedSalle }))
    .catch((err) => res.status(400).json(err));
};