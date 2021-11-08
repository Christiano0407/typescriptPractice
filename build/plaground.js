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
