let x = 2;
let y = 1;
let z;
//
enum ContractStatus {
  permanent = 1,
  temp,
  apprentice,
}

const employStatus = ContractStatus.temp;
console.log(employStatus);

//
let randomValue: unknown = 10;
randomValue = true;
randomValue = `Mateo`;

(randomValue as string).toUpperCase();
(<string>randomValue).toUpperCase();

if (typeof randomValue === "string") {
  randomValue.toLocaleLowerCase();
}
