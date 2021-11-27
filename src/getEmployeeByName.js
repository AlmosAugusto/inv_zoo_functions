const data = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  return employeeName === undefined ? {} : data.employees.find((name) =>
    name.firstName === employeeName || name.lastName === employeeName);
}
// console.log(getEmployeeByName('Emery'));
module.exports = getEmployeeByName;
