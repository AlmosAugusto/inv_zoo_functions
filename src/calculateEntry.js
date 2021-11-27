const data = require('../data/zoo_data');

function countEntrants(entrants) {
  const sumEntrants = entrants.reduce((acc, current) => {
    if (current.age < 18) acc.child += 1;
    if (current.age >= 18 && current.age < 50) acc.adult += 1;
    if (current.age >= 50) acc.senior += 1;
    return acc;
  }, { child: 0, adult: 0, senior: 0 });
  return sumEntrants;
}

function calculateEntry(entrants) {
  if (entrants === undefined || Object.keys(entrants).length === 0) { return 0; }
  const entrantsSum = countEntrants(entrants);
  return entrantsSum.child * data.prices.child + entrantsSum.adult * data.prices.adult
  + entrantsSum.senior * data.prices.senior;
}

module.exports = { calculateEntry, countEntrants };
