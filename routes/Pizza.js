const express = require("express");
const PizzaRouter = express.Router();
const {
  index,
  show,
  create,
  update,
  destroy,
} = require("../controllers/Pizza");

//* ROUTES

//get all pizzas
PizzaRouter.get("/", index);

//show one pizza
PizzaRouter.get("/:id", show);

//create a new pizza
PizzaRouter.post("/", create);

//updating a pizza
PizzaRouter.put("/:id", update);

//destroy a pizza
PizzaRouter.delete("/:id", destroy);

module.exports = PizzaRouter;
