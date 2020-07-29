const express = require("express");
const RatRouter = express.Router();
const { index, create, update, destroy } = require("../controllers/Rat");

//get all rats
RatRouter.get("/", index);

//create new rat
RatRouter.post("/", create);

//update a rat
RatRouter.put("/:id", update);

//destroy a rat
RatRouter.delete("/:id", destroy);

module.exports = RatRouter;
