/* // EJERCICIO #0
function unique(arr) {
  return [...new Set(arr)];
}

let values = [
  "Hare",
  "Krishna",
  "Hare",
  "Krishna",
  "Krishna",
  "Krishna",
  "Hare",
  "Hare",
  ":-O",
];

alert(unique(values));

// EJERCICIO #1
let anagramas = [
  "nap",
  "teachers",
  "cheaters",
  "PAN",
  "ear",
  "era",
  "hectares",
];

let myArr = [];

function aclean(arr) {
  let word1;
  let word2;
  for (let i in arr) {
    for (let y in arr) {
      if (arr[i] === arr[y]) {
        continue;
      } else if (arr[i].length === arr[y].length) {
        word1 = arr[i].split("").sort().join("").toLowerCase();
        word2 = arr[y].split("").sort().join("").toLowerCase();
        if (word1 === word2) {
          myArr.push(arr[i]);
          anagramas[i] = " ";
        }
      } else {
      }
    }
  }
  console.log(myArr);
}

aclean(anagramas);

// EJERCICIO #2
//El código no funciona, debido a que map.keys te va a devolver un objeto y .push no se puede utilizar en uno de ellos. Por otro lado, lo que podríamos realizar para arreglar el código, es convertir map.keys() un array.

// EJERCICIO #3
// El último valor acertado por el código será 1, ya que en el código, al momento en que le pasas 0, la función while te dará FALSE, lo cual generará que pare.

// EJERCICIO #4
// En la forma de prefijo lo que la consola va a mostrar es 1, 2, 3, y 4, porque al poner ++ antes, lo que hará la variable es sumar uno antes de ejecutar. Más aún, en la forma sufija lo que la consola mostrará son los valores 1, 2, 3, 4 y 5, debido a que primero lo va a comparar y luego hace la operación, la cual es sumar 1.

// EJERCICIO #5
const ask = (question, yes, no) => {
  if (confirm(question)) {
    yes()
  } else {
    no()
  }
}
  ask("Do you agree?", () => {
  alert("You agreed."); }, () => {
  alert("You canceled the execution."); })

// EJERCICIO #6
const makeCounter = {
  count: 7,
  counter: function () {
    return this.count + 1;
  },

  decrease: function () {
    return this.count - 1;
  },

  set: function (value) {
    return (this.count = value);
  },
};

console.log(makeCounter.counter());
console.log(makeCounter.decrease());
console.log(makeCounter.set(14));

// EJERCICIO #7
while (true) {
  let num = Number(prompt("Insert a number higher than 100"));
  if (typeof num === "number" && num > 100) {
    break;
  }
}

// EJERCICIO #8
let list = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null,
      },
    },
  },
};

let obj = list;
while (true) {
  console.log(obj.value);
  if (obj.next) {
    obj = obj.next;
  } else {
    break;
  }
}

function allValues() {
  console.log(obj.value);
  if (obj.next) {
    obj = obj.next;
    allValues();
  } else {
    return;
  }
}

allValues();
*/
