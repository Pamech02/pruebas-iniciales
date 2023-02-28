// const arreglopalabras = ['hola', 'pesas', 'gym', 'clases', 'programacion'];

// // const ign = (palabras) => {

// // for (let index = 0; index < palabras.length; index++) {

// //     if (palabras[index].length <= 4) {
// //         nuevaspalabras.push(palabras[index]);
// //     }   
// // }
// // }

// // let nuevaspalabras = [];

// // ign(arreglopalabras);
// // console.log(nuevaspalabras);




// const palabrasmetidas = arreglopalabras.map(proceso);

// function proceso(element) {

// if (element.length <=4) {
//    return element = 'pene';
// }
// else {
//    return element;
// }
// }

// console.log(palabrasmetidas);

// const filtrados = arreglopalabras.filter((element)=>{
//    return element.length <= 4;
// });
  
// console.log(filtrados);

const ar1 = [10,55,34];
const ar2 = [55,34,10];

console.log(ar1);
console.log(ar2);

const a1 = JSON.stringify(ar1.sort((a,b)=>a-b));
console.log(a1);

const a2 = JSON.stringify(ar2.sort((a,b)=>a-b));
console.log(a2);

const comparacion = (c,d)=>{
   if (c === d) {
      return true
   } else { return false
      
   }
}

console.log(comparacion(a1,a2));
