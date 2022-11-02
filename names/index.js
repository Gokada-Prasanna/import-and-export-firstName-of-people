let peopleList = require("../country/state/city/index.js");

let firstNames = require("../utilities/utils/index.js");

function getPeopleInCity(peopleList) {
  return firstNames(peopleList);
}
module.exports = getPeopleInCity;
