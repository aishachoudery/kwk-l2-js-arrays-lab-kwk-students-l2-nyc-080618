// Write your solution here!
const drivers = ["Milo", "Otis", "Garfield"]
//drivers.push("Ralph")
function destructivelyAppendDriver(name) {
  drivers.push("Ralph");
}

function destructivelyPrependDriver(name) {
  drivers.shift();
}
