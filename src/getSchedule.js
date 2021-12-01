const data = require('../data/zoo_data');

const {
  hours,
  species,
} = require('../data/zoo_data');

const monday = {
  officeHour: 'CLOSED',
  exhibition: 'The zoo will be closed!',
};
const scheduleDayAndHour = (p) => `Open from ${hours[p].open}am until ${hours[p].close}pm`;

const scheduleDay = (scheduleTarget) => species.find((specie) =>
  scheduleTarget === specie.name).availability;

const scheduleTime = () => {
  const hoursOfDay = Object.keys(hours);
  return hoursOfDay.reduce((acc, current) => {
    if (current === 'Monday') {
      acc[current] = monday;
      return acc;
    }
    acc[current] = {
      officeHour: scheduleDayAndHour(current),
      exhibition: [],
    };
    return acc;
  }, {});
};

const speciesSchedule = () =>
  species.reduce((acc, current) => {
    current.availability.forEach((param) => {
      if (Object.keys(acc).includes(param)) {
        const {
          exhibition,
        } = acc[param];
        exhibition.push(current.name);
      }
    });
    return acc;
  }, scheduleTime());

function getSchedule(scheduleTarget) {
  const animalsList = species.map((animalsSpecies) => animalsSpecies.name);

  if (Object.keys(hours).includes(scheduleTarget)) {
    const schel = { [scheduleTarget]: speciesSchedule()[scheduleTarget] };
    return schel;
  }

  if (scheduleTarget === undefined) return speciesSchedule();

  return animalsList.includes(scheduleTarget) ? scheduleDay(scheduleTarget) : speciesSchedule();
}
// console.log(getSchedule('Monday'));
module.exports = getSchedule;
