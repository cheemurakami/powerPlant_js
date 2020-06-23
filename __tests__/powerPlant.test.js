// import './../src/powerPlant.js';
// import { TestScheduler } from 'jest';

describe('plant grow functions', () => {
  let plant;
  beforeEach(() => {
     plant = {"kind": "tulip", "soil": 0, "water": 0, "light": 0}
  });

  test('should create plant object with incremented water property', () => {
    // let plant = {"kind": "tulip", "soil": 0, "water": 0, "light": 0}
    const hydrate = (plant) => {
      return {
        ...plant,
        water: (plant.water || 0) + 1
      }
    };
    // hydrate();
    expect(hydrate(plant)).toEqual({"kind": "tulip", "soil": 0, "water": 1, "light": 0});
  });

  test('should create plant object with incremented soil property', () => {
    const feed = (plant) => {
      return {
        ...plant,
        soil: (plant.soil || 0) + 1
      }
    };

    expect(feed(plant)).toEqual({"kind": "tulip", "soil": 1, "water": 0, "light": 0})
  })

  test('should create plant object and increment properties based on abstracted method', () => {
    const changeState = (prop) => {
      return (value) => {
        return (state) => ({
          ...state,
          [prop] : (state[prop] || 0) + value
        })
      }
    }
    
    const feed = changeState("soil");

    expect(feed(2)(plant)).toEqual({"kind": "tulip", "soil": 2, "water": 0, "light": 0})
  })

  
})