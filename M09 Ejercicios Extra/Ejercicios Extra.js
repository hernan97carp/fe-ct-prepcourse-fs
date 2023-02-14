/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function deObjetoAarray(objeto) {
   // Recibes un objeto. Tendrás que crear un arreglo de arreglos.
   // Cada elemento del arreglo padre será un nuevo arreglo que contendrá dos elementos.
   // Estos elementos debe ser cada par clave:valor del objeto recibido.
   // [EJEMPLO]: {D: 1, B: 2, C: 3} ---> [['D', 1], ['B', 2], ['C', 3]].
   // Tu código:
     // []
  // [[],[],[],[]]
  // [[clave: valor],[clave: valor],[clave: valor],[clave: valor]]
  // por cada propiedad pushea al nuevo arreglo
//   let nuevoArray= [];
//   for(var clave in objeto){
//   nuevoArray.push([clave,objeto[clave]]);

//   }
//   return nuevoArray;
return Object.entries(objeto);

}

function numberOfCharacters(string) {
   // La función recibe un string. Debes recorrerlo y retornar un objeto donde cada propiedad es una de las
   // letras del string, y su valor es la cantidad de veces que se repite en el string.
   // Las letras deben estar en orden alfabético.
   // [EJEMPLO]: "adsjfdsfsfjsdjfhacabcsbajda" ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 }
   // Tu código:
   let arrayDeLetras= string.split("");
   let objeto= {}
   arrayDeLetras= arrayDeLetras.sort();
   arrayDeLetras.forEach(letra =>{
      if (objeto.hasOwnProperty(letra)){ // objeto tenes la propiedad que se llame a(letra)?
         objeto[letra] = objeto[letra] + 1 // si encpntraste la misma letra guardala y sumale 1
      } else {// sino la tenes creala y asignale 1
         objeto[letra] = 1
      }

   })
   return objeto;
}


function capToFront(string) {
   // Recibes un string con algunas letras en mayúscula y otras en minúscula.
   // Debes enviar todas las letras en mayúscula al comienzo del string.
   // Retornar el string.
   // [EJEMPLO]: soyHENRY ---> HENRYsoy
   // Tu código:
   var upper= "";
   var lower= "";
   for(var i = 0; i < string.length;i++){
      if(string[i] === string[i].toUpperCase()){ // si la string en la pocicion [i] "la primera letra" es === a esa "primera letra " pero en mayuscula!!! que la guarde en la variable mayuscula
         upper= upper + string[i]
   }else {
      lower= lower + string[i];
   }
}
return upper + lower;
}
function asAmirror(frase) {
   // Recibes una frase. Tu tarea es retornar un nuevo string en el que el orden de las palabras sea el mismo.
   // La diferencia es que cada palabra estará escrita al inverso.
   // [EJEMPLO]: "The Henry Challenge is close!"  ---> "ehT yrneH egnellahC si !esolc"
   // Tu código:

//  let espejo= frase.split('').reverse().join('');
//   return espejo.split(' ').reverse().join(' ');
let arr= frase.split(" ");
let mirror= " ";
for(let i= 0;i< arr.length;i++){
  let palabra= arr[i];
  let palabraEspejo="";
  for(let j= palabra.length -1;j >= 0;j--){
    palabraEspejo += palabra[j];
}
mirror += palabraEspejo + " ";

}
return mirror.trim();
} 


function capicua(numero) {
   // Si el número que recibes es capicúa debes retornar el string: "Es capicua".
   // Caso contrario: "No es capicua".
   // Tu código:
   // el metodo split es un metodo para strings no para numeros por eso usamos toSTRINGS
   numero = numero.toString();
   if(numero === numero.split('').reverse().join('')){
      return "Es capicua"
   }
   return "No es capicua"
}

function deleteAbc(string) {
   // Tu tarea es eliminar las letras "a", "b" y "c" del string recibido.
   // Retorna el string sin estas letras.
   // Tu código:
   //return string.replace(/[abc]/g,"")
  let result= "";
  for(let i = 0; i < string.length;i++){
   if(string[i] != 'a' && string[i] != 'b' && string[i] != "c"){
      result += string[i];
   }
  }
  return result;
 
}

function sortArray(arrayOfStrings) {
   // Recibes un arreglo de strings.
   // Debe retornar un nuevo arreglo, pero con las palabras ordenadas en orden creciente a partir
   // de la longitud de cada string.
   // [EJEMPLO]: ["You", "are", "beautiful", "looking"]  ---> [“You", "are", "looking", "beautiful"]
   // Tu código:
// let array =[2,6,3,4,1,5];
// let aux;
// for(let i= 0;i< array.length - 1;i++){
//    for(let j=i+1; j <array.length;j++){
//       if(array[i] > array[j]){
//        aux= array[i];
//        array[i]= array[j];
//        array[j]= aux;    
//       }
//    }
// }

let aux;
for(let i= 0;i< arrayOfStrings.length - 1;i++){
   for(let j=i+1; j <arrayOfStrings.length;j++){
      if(arrayOfStrings[i].length > arrayOfStrings[j].length){
       aux= arrayOfStrings[i];
       arrayOfStrings[i]= arrayOfStrings[j];
       arrayOfStrings[j]= aux;    
      }
   }
}
return arrayOfStrings;
}



function buscoInterseccion(array1, array2) {
   // Recibes dos arreglos de números.
   // Debes retornar un nuevo arreglo en el que se guarden los elementos en común entre ambos arreglos.
   // [EJEMPLO]: [4,2,3] U [1,3,4] = [3,4].
   // Si no tienen elementos en común, retornar un arreglo vacío.
   // [PISTA]: los arreglos no necesariamente tienen la misma longitud.
   // Tu código:
   let nuevoArreglo= [];
   for(let i=0;i<array1.length;i++){
     for(let j= 0;j < array2.length;j++){
       if(array1[i] === array2[j]){
         nuevoArreglo.push(array1[i])
       }
     }
   }
   return nuevoArreglo;
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   deObjetoAarray,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};
