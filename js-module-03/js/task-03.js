"use script";

const findBestEmployee = function (employees) {
  const values = Object.values(employees);
  let bigestValue = 0;
  for (const value of values) {
    if (value > bigestValue) {
      bigestValue = value;
    }
  }
  let theBestEmployee = "pavel";
  for (const key in employees) {
    if (employees[key] === bigestValue) {
      theBestEmployee = key;
    }
  }
  return theBestEmployee;
};

console.log(
  findBestEmployee({
    ann: 29,
    david: 35,
    helen: 1,
    lorence: 99,
  })
);
console.log(
  findBestEmployee({
    poly: 12,
    mango: 17,
    ajax: 4,
  })
);
console.log(
  findBestEmployee({
    lux: 147,
    david: 21,
    kiwi: 19,
    chelsy: 38,
  })
);
