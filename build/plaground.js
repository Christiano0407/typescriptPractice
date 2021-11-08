"use strict";
var x = 2;
var y = 1;
var z;
//
var ContractStatus;
(function (ContractStatus) {
    ContractStatus[ContractStatus["permanent"] = 1] = "permanent";
    ContractStatus[ContractStatus["temp"] = 2] = "temp";
    ContractStatus[ContractStatus["apprentice"] = 3] = "apprentice";
})(ContractStatus || (ContractStatus = {}));
var employStatus = ContractStatus.temp;
console.log(employStatus);
//
var randomValue = 10;
randomValue = true;
randomValue = "Mateo";
randomValue.toUpperCase();
randomValue.toUpperCase();
if (typeof randomValue === "string") {
    randomValue.toLocaleLowerCase();
}
//>>>
var multiValue = 10;
multiValue = "Alma";
multiValue.toUpperCase();
//>>>
function add(x, y) {
    if (typeof x === "number" && typeof y === "number") {
        return x + y;
    }
    if (typeof x === "string" && typeof y === "string") {
        return x + y;
    }
    throw new Error("Error!!");
}
console.log(add(5, 2));
console.log(add("Plus", "Channel"));
var person = {
    employId: 5,
    age: 10,
    stockPlan: true,
};
console.log(person);
