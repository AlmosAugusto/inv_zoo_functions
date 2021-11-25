const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  const animalAge = data.species.find((species) => species.name === animal);
  return animalAge.residents.every((resident) => resident.age > age);
}

module.exports = getAnimalsOlderThan;
