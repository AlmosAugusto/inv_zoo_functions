const data = require('../data/zoo_data');

function getOldestFromFirstSpecies(id) {
  const employee = data.employees.find((employeeId) => employeeId.id === id).responsibleFor[0];
  const speciesRes = data.species.find((speciesR) => speciesR.id
  === employee).residents;
  const animalAge = speciesRes.reduce((acc, current) => (acc.age < current.age ? current : acc));
  return Object.values(animalAge);
}

module.exports = getOldestFromFirstSpecies;
