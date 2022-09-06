const peopleNames = require("../country/state/city/index");
const utilityName = require("../utilities/utils/index");

const getPeopleInCity = (peopleNames) => {
  return utilityName(peopleNames);
};
module.exports = getPeopleInCity;
