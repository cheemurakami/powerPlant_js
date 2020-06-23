
// const paint = () => {
//       const obj = {
//         paints: () => {
//           return `${obj.name} paints in ${obj.color}`
//         }
//       }
//     }

// const makePainter = (name, color) => {
//   let state = {
//     name
//   }
//   return {...state, ...color, ...paint()}
// }

// const painter1 = makePainter("painter1", "red")
// const painter2 = makePainter("painter2", "blue")

// console.log(painter1.paints());
// console.log(painter2.paints());


// const paint = (name, color) => {
// const obj = {
//   name: name,
//   color: color,
//   paints: function(){
//     return `${this.name} paints in ${this.color}!`
//   }
// }
// }
// const painter1 = paint("PainterBob", "blue")
// const painter2 = paint("PainterAlice", "red")

// console.log(painter1.paints())
// console.log(painter2.paints())

// const paint = (name) {
//   const obj = {
//     color: function(color){
//       paints: function() {
//         return `${name} paints in ${color}!`
//       }
//     }

//   }
// }

// painter1 = color(red);
// painter2 = color(blue);

// console.log(painter1.paints())
// console.log(painter2.paints())

const paint = (thisname, thiscolor) => ({
  name: thisname,
  color: thiscolor,
  paints: function(){
      return `${this.name} paints in ${this.color}!`
    }
})

painter1 = paint("Bob", "red");
painter2 = paint("Janet", "blue");

console.log(painter1.paints())
console.log(painter2.paints())




const hasColor = (painter) => {
  return (color) => {
    painter.color = color
  }
}
const canPaint = (painter) => ({
  paints: () => {
    return `${painter.name} paints in ${painter.color}`
  }
})

const makePainter = (name, color) => {
  let painter = {
    name
  }

  return {...painter, ...hasColor(painter)(color),...canPaint(painter) }
}

const painter1 = makePainter("Bob", "red")
const painter2 = makePainter("Linda", "blue")

console.log(painter1.paints())
console.log(painter2.paints())

