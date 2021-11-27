const data = require('../data/zoo_data');

function isManager(id) {
  return data.employees.some((manager) => manager.managers.includes(id));
}

function getRelatedEmployees(managerId) {
  if (isManager(managerId)) {
    return data.employees.filter((relatedEmployee) => relatedEmployee.managers.includes(managerId))
      .map((name) => `${name.firstName} ${name.lastName}`);
  }
  throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
}
// console.log(getRelatedEmployees(stephanieId));
module.exports = { isManager, getRelatedEmployees };
