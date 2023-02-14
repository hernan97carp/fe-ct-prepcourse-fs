/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function mayuscula(nombre) {
   // Esta función recibe un nombre (string).
   // Debe devolver el mismo nombre, pero con la primera letra en mayúscula.
   // [Ejemplo]: "mario" ----> "Mario".
   // Tu código:
   return nombre.charAt(0).toUpperCase() + nombre.slice(1)
}

function invocarCallback(cb) {
   // Invoca/ejecuta el callback `cb`.
   // [NOTA]: no debes reotrnar nada.
   // Tu código:
   cb();
}

function operacionMatematica(num1, num2, cb) {
   // En este ejercicio recibirás dos números y un callback.
   // El callback realiza una operación matemática, por lo que necesita de los dos números.
   // Retorna el resultado del callback pasándole como parámetros los números.
   // Tu código:
   return cb(num1,num2);

}

function sumarArray(arrayOfNumbers, cb) {
   // Recibes un arreglo de números y un callback.
   // Suma todos los números del arreglo.
   // Este resultado debes pasárselo como argumento al callback recibido.
   // [NOTA]: no debes reotrnar nada.
   // Tu código:
   // reduce devuelve los elementos de la array todos juntos 
   //reduce no devuelve una nueva array solo devuelve un resultado segun lo q le pidamos
   // eje array= ["a","b","c"]
   // con reduce quedaria "abc"

   // var resultado=   arrayOfNumbers.reduce((numeros,acumulador)=>{
   //    return acumulador + numeros;
   // })
   // cb(resultado);
   // 
   var resultado = 0;
   for(var i =0; i < arrayOfNumbers.length;i++){
      resultado += arrayOfNumbers[i];
   }
   cb(resultado);
}

function forEach(array, cb) {
   // Recibes un arreglo y un callback.
   // Debes iterar sobre el arreglo, y por cada elemento ejecutar el callback.
   // Debes pasarle el elemento como argumento al callback.
   // Tu código:
   // ["a",1,true]
   // 1)recorrer ese arreglo
   //2)por cada elememto -> cb(elemento)
   // array.forEach((elemento)=>{
   //    cb(elemento);
   // })
   for(var i in array){
      cb(array[i]);
   }
}

function map(array, cb) {
   // Debes iterar sobre el arreglo, y cada elemento pasárselo como arguemento al callback.
   // Tiene que guardar el resultado devuelto por el callback en cada elemento dentro de un nuevo arreglo.
   // Retorna el nuevo arreglo.
   // Tu código:
   // por cada elemento llama al callback y ese lo pasa por parametro al callback, el cb resuelve todo y se lo va pusheando al nuevo arreglo
   let nuevoArreglo= [];
   nuevoArreglo= array.map((elemento)=> cb(elemento));
    return nuevoArreglo;
}

function filter(arrayOfStrings) {
   // Debes identificar todos los elementos el arreglo que comiencen con la letra "a".
   // Luego retorna un nuevo arreglo con estos elementos.
   // Tu código:
   var nuevoArreglo= arrayOfStrings.filter((elemento)=> elemento.charAt(0)=== 'a');
   return nuevoArreglo;
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   mayuscula,
   invocarCallback,
   operacionMatematica,
   sumarArray,
   forEach,
   map,
   filter,
};
