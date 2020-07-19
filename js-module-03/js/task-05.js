"use script";
const products = [
  { name: "Радар", price: 1300, quantity: 4 },
  { name: "Сканер", price: 2700, quantity: 3 },
  { name: "Дроид", price: 400, quantity: 7 },
  { name: "Захват", price: 1200, quantity: 2 },
];
const getAllPropValues = function (arr, prop) {
  const arrOfPropValues = [];
  for (const item of arr) {
    for (const key in item) {
      if (key === prop) {
        arrOfPropValues.push(item[key]);
      }
    }
  }
  return arrOfPropValues;
};

console.log(getAllPropValues(products, "name"));

console.log(getAllPropValues(products, "quantity"));

console.log(getAllPropValues(products, "category"));
