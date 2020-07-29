const Rat = require("../models/Rat");
const Pizza = require("../models/Pizza");

//*INDEX
const index = async (req, res) => {
  try {
    //get array of rats with their pizza ids
    const allRats = await Rat.find({});

    //create a new array of rats with the pizza info
    const rats = await allRats.map(async (rat) => {
      const thePizza = await Pizza.findById(rat.pizza);

      return {
        _id: rat._id,
        name: rat.name,
        pizza: thePizza,
      };
    });
    const rats2 = await Promise.all(rats);
    res.status(200).json(rats2);
  } catch (err) {
    res.status(400).send(err);
  }
};

//* CREATE
const create = async (req, res) => {
  try {
    const newRat = await Rat.create(req.body);
    res.status(200).json(newRat);
  } catch (err) {
    res.status(400).send(err);
  }
};

//* UPDATE
const update = async (req, res) => {
  try {
    const updatedRat = await Rat.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.status(200).json(updatedRat);
  } catch (err) {
    res.status(400).send(err);
  }
};

//* DELETE
const destroy = async (req, res) => {
  try {
    const deletedRat = await Rat.findByIdAndDelete(req.params.id);
    res.status(200).json(deletedRat);
  } catch (err) {
    res.status(400).send(err);
  }
};

module.exports = { index, create, update, destroy };
