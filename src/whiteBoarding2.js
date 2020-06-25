//state prob #1
const paint =  (color) => {
  const obj = {
    paints: () => {
      return `Paints ${color}!`;
    }
  }
  return obj;
}
const painter1 = paint('red')
const painter2 = paint('green')
const painter3 = paint('yellow')
painter1.paints();
painter2.paints();
painter3.paints();

//state prob #2
const canSound = (soundKindStr) => {
  const obj = {
    sound: () => {
      return soundKindStr;
    }
  }
  return obj;
}
const faucet = canSound("Drip drip drip");
faucet.sound();
const oldCar = canSound("Grumble grumble");
oldCar.sound();
const sleepyBear = canSound("Grrr...yawn");
sleepyBear.sound();

//state prob #3
const canThrow = () =>{
  const obj = {
    throw: (robotName) => {
      return (distance) => {
        return (speed) => {
          return `${robotName} throws the spear ${distance} yards at ${speed} miles per hour!`;
        }
      }
    }
  } 
  return obj;
}

const battleRobot1 = canThrow("The battle robot")(100)(200);
console.log(battleRobot1.throw());


//canThrow("The battle robot")(100)(200); 
//canThrow('Chee')(25)(50);