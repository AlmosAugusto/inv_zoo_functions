const data = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  return data.species.filter((arrSpecies) => ids.includes(arrSpecies.id));
}

module.exports = getSpeciesByIds;
