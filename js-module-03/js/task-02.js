"use script";
const countProps = function (obj) {
  const keysObj = Object.keys(obj);
  return keysObj.length;
};
console.log(countProps({}));
console.log(countProps({ name: "Mango", age: 2 }));
console.log(countProps({ mail: "poly@mail.com", isOnline: true, score: 500 }));
