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

//>>>
let multiValue: number | string = 10;
multiValue = "Alma";
multiValue.toUpperCase();

//>>>
function add(x: number | string, y: number | string) {
  if (typeof x === `number` && typeof y === `number`) {
    return x + y;
  }
  if (typeof x === `string` && typeof y === `string`) {
    return x + y;
  }

  throw new Error("Error!!");
}
console.log(add(5, 2));
console.log(add("Plus", "Channel"));

// >>>>>
interface Employ {
  employId: number;
  age: number;
}

interface Manager {
  stockPlan: boolean;
}

const person: Employ & Manager = {
  employId: 5,
  age: 10,
  stockPlan: true,
};

console.log(person);
