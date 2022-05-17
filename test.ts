const waterBottle: string = "HydroFlask";

const box: string[] = ["tape", "blades", "forks"];

box.push("soap");

box.push(waterBottle);

console.log(box);

interface JapaneseCar {
  type: string;
  year: number;
  color: string;
  totalLoss?: false;
}

const civic: JapaneseCar = {
  type: "Honda",
  year: 2016,
  color: "black",
};

const userName1: string = "Freddy";
console.log(userName1);
console.log(civic);

const hungry: boolean = true;
console.log(typeof hungry);
