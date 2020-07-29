const Pizza = require("../models/Pizza");

//* INDEX - gets all the pizza
const index = async (req, res) => {
  try {
    const allPizza = await Pizza.find({});
    res.status(200).json(allPizza);
  } catch (error) {
    res.status(400).send(error);
  }
};

//* SHOW - show one pizza
const show = async (req, res) => {
  try {
    const onePizza = await Pizza.findById(req.params.id);
    res.status(200).json(onePizza);
  } catch (error) {
    res.status(400).send(error);
  }
};

//* CREATE - makes a new pizza
const create = async (req, res) => {
  try {
    const newPizza = await Pizza.create(req.body);
    res.status(200).json(newPizza);
  } catch (error) {
    res.status(400).send(error);
  }
};

//* UPDATE - updates a pizza
const update = async (req, res) => {
  try {
    const updatedPizza = await Pizza.findByIdAndUpdate(
      req.params.id, //parameter in our route with id
      req.body, //updated info
      { new: true } //by default will return the unupdated doc so using this, will return the new version instead
    );
    res.status(200).json(updatedPizza);
  } catch (error) {
    res.status(400).send(error);
  }
};

//* DESTROY - deletes a pizza
const destroy = async (req, rers) => {
  try {
    const deletedPizza = await Pizza.findByIdAndDelete(req.params.id);
    res.status(200).json(deletedPizza);
  } catch (error) {
    res.stauts(400).send(error);
  }
};

module.exports = { index, show, create, update, destroy };
