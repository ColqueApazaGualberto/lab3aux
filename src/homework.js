(() => {

  /* Excercises */

  /* First excercise */
  
  let numbers = [1, 2, 3, 4, 5];
  
  /* Multiplique los numeros del arreglo por 5 */

  /*Resultado esperado: [5, 10, 15, 20, 25] */

  /* First excercise */
  let result = numbers.map(num => num * 5); //map toma como argumento una función. Luego, aplica esa función a cada elemento 


  /* Second excercise */

  let names = ["Jhosep", "Daniel", "Rodrigo", "Veronica"];

  /* Ordernar los nombres alfabeticamente */

  /* Resultado esperado: ["Daniel", "Jhosep", "Rodrigo", "Veronica"] */

  /* Second excercise */
  let sortedNames = names.sort(); //sort ordena los nombres en orden alfabético.


  /* Thrid excercise */

  const data = ['a', 'b', 'z', 'r', 'a', 'c', 'r', 'a'];

  /* Dado un arreglo, crear otro sin letras repetidas */
  /* Resultado esperado: ['a', 'b', 'z', 'r', 'c'] */

  /* Thrid excercise */
  const uniqueLetters = new Set(data);
  const norepit = Array.from(uniqueLetters);

  /* Fourth excercise */

  const largeWord = "abcdabcdABCD";

  /* Dado un string mostrar cuantas veces se repite cada letra*/
  /* Resultado: 
    {
      a: 2,
      b: 2,
      c: 2,
      d: 2,
      A: 1,
      B: 1,
      C: 1,
      D: 1
    }
  */

  /* Fourth excercise */

  const letterCounts = {};
  for (const char of largeWord) {
    if (char.match(/[a-zA-Z]/)) {
      letterCounts[char] = (letterCounts[char] || 0) + 1;
    }
  }

})();
