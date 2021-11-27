const data = require('../data/zoo_data');

function countAnimals(animal) {
  if (!animal) {
    const animals = {};
    data.species.forEach((animalSpecies) => {
      animals[animalSpecies.name] = animalSpecies.residents.length;
    });
    return animals;
  }
  const ani = data.species.find((spe) => animal.specie === spe.name);
  if (!animal.sex) return ani.residents.length;
  return ani.residents.filter((resident) => resident.sex === animal.sex).length;
}
module.exports = countAnimals;
