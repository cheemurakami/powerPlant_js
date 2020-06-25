//closers and currying prob #1
function addPrefix (prefix){
  return function (name) {
    return console.log(`${prefix} ${name}`);
  }
} 
const prefixSir = addPrefix("Madam");
prefixSir("Kiwi");


//closers and currying prob #2
function soundMaker (animalSound) {
  return function (animal) {
    return console.log(`${animal} says ${animalSound}`);
  }
}
const lionSound = soundMaker("roar");
const mouseSound = soundMaker("squeak");
const kiwiSound = soundMaker("NO");
lionSound('A Lion');
mouseSound('A Mouse');
kiwiSound('Kiwi');

//closers and currying prob #3
function nameEnhancer(prefix){
  return function (suffix){
    return function (name){
      return console.log(`${prefix} ${name} ${suffix}`)
    }
  }
}
const misterJunior = nameEnhancer("Mister")("Junior");
const duchessThird = nameEnhancer("Duchess")("The Third");
const professionalSenior = nameEnhancer("Professional")("Senior");
misterJunior("Bee");
duchessThird("Chee");
professionalSenior("Kiwi");

//closers and currying prob #4


function (x, y) {
  let restDays = 0;
  let totalDays = Math.abs(x) + Math.abs(y)
  if (totalDays > 5 && totalDays % 5 == 0 ){
    restDay = totalDays / 5;
    return `${restDay}days to rest`;
  }

  if (x > 0) {
    return `${Math.abs(x)}days to east`;
  } else if (x < 0) {
    return `${Math.abs(x)}days to west`;
  } else if (y > 0) {
    return `${Math.abs(y)}days to north`;
  } else if (x < 0) {
    return `${Math.abs(y)}days to south`;
  } 
}
