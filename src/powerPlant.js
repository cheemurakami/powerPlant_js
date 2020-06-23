// const hydrate = (plant) => {
//   return {
//     ...plant,
//     water: (plant.water || 0) + 1
//   }
// };

// const feed = (plant) => {
//   return {
//     ...plant,
//     soil: (plant.soil || 0) + 1
//   }
// };
export let plant = {"kind": "tulip", "soil": 0, "water": 0, "light": 0}

export const storeState = () => {
  let currentState = plant;
  return (stateChangeFunction) => {
    const newState = stateChangeFunction(currentState);
    currentState = {...newState};
    return newState;
  }
}

const stateChanger = storeState();

export const changeState = (prop) => {
  return (value) => {
    return (state) => ({
      ...state,
      [prop] : (state[prop] || 0) + value
    })
  }
}
const feed = changeState("soil");
const hydrate = changeState("water");
const giveLight = changeState("light");
const blueFood = changeState("soil")(5);


const fedPlant = stateChanger(blueFood);


