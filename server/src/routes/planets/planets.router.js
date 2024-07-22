const express = require("express");

const { getAllPlanets } = require("./planets.controller");

const planetsRouter = express.Router();

planetsRouter.get("/Planets", getAllPlanets);

module.exports = planetsRouter;