// // const new = (a: number, b: number): number => {
// //     // let
// // // bisa dirubah
// // let nameA: string = "krisna"

// // // const
// // // tidak dirubah
// // const nameK: string = "krisna"

// // // var
// // // type lama sama kayak let
// // var nameL: string = "krisna"

// // // string
// // let nameS: string = "krisna"

// // // boolean
// // let isActive: boolean = true

// // // number / integer
// // let total: number = 10

// // // float
// // // nan
// // let totalNan: null = null

// // console.log(nameA)

// // }

// // interface IName {
// //     name: string
// //     age: number
// // }

// // // union type
// // let value: string | number
// // value = 1
// // value = "krisna"

// // // type alias
// // type StringOrNumber = string | number

// // let result: StringOrNumber = "krisna"
// // result = 1
// // result = "andi"

// // let find: any = true
// // find = "krisna"
// // find = 1

// // let namel: string = "krisna";
// // console.log(namel);

// // const data: boolean = true;
// // console.log(data);

// // function add(a: number, b: number): number {
// //   return a + b;
// // }
// // console.log(add(1, 2));

// // loop

// // let x: number = 1;
// // for (x; x <= 10; x++) {
// //   console.log("for loop", x);
// // }

// // let z: number = 1;
// // while (z <= 10) {
// //   console.log("while loop", z);
// //   z++;
// // }

// // let y: number = 1;
// // do {
// //   console.log("do while loop", y);
// //   y++;
// // } while (y <= 10);

// // array
// // let arr: string[] = ["muhammad"];

// // arr[1] = "faiz";

// // console.log(arr);
// // console.log(arr.length);
// // console.log(arr[arr.length - 1]);

// // let arr2: string[][] = [
// //   ["muhammad", "faiz"],
// //   ["software", "engineer"],
// // ];

// // console.log(arr2[0][0]);
// // console.log(arr2[0][1]);
// // console.log(arr2[1][0]);
// // console.log(arr2[1][1]);

// // object
// // let car = {
// //   merk: "ferari",
// //   amountBan: 4,
// //   amountJendela: 4,
// // };

// // console.log(car.merk);

// interface Todo {
//   userId: number;
//   id: number;
//   tittle: string;
//   completed: boolean;
// }

// async function fetchTodo(): Promise<void> {
//   try {
//     const response = await fetch(
//       "https://jsonplaceholder.typicode.com/todos/1"
//     );
//     if (!response.ok) {
//       throw new Error(`HTTPS error! status: ${response.status}`);
//     }
//     const data: Todo = await response.json();
//     console.log(data);
//   } catch (error) {
//     console.log("There was as problem with the fetch operation:", error);
//   }
// }

// fetchTodo();

// // class
// class Animal {
//   private name: string;

//   constructor(name: string) {
//     this.name = name;
//   }

//   public makeSound(): void {
//     console.log("animal sound");
//   }

//   public getName(): string {
//     return this.name;
//   }

//   public introduce(): string {
//     return `this animal called ${this.name}`;
//   }
// }

// // inheritance

// class Dog extends Animal {
//   private breed: string;

//   constructor(name: string, breed: string) {
//     super(name);
//     this.breed = breed;
//   }

//   public makeSound(): void {
//     console.log("the dog barks");
//   }

//   public getBreed(): string {
//     return this.breed;
//   }

//   public override introduce(): string {
//     return `${super.introduce()} abd it's a ${this.breed}`;
//   }
// }

// const animal = new Animal("Generic Animal");
// console.log(animal.getName());
// animal.makeSound();

// const dog = new Dog("Buddy", "Golden Retriever");
// console.log(dog.getName());
// console.log(dog.introduce());
// dog.makeSound();

const a: number = 10;
const b: number = 20;
const c: number = -5;

if (a > 0 && b > 0 && c > 0) {
  console.log("a, b, dan c adalah positif");
} else {
  console.log("salah satunya bukan positif");
}

if (a > 0 || b > 0 || c > 0) {
  console.log("salah satunya adalah positif");
} else {
  console.log("a, b, dan c bukan positif");
}

// ternary
const ternary = a % 2 === 0 ? "genap" : "ganjil";
console.log(ternary);
// nested ternary
const hasil =
  a > 0 ? (a % 2 === 0 ? "genap" : "ganjil") : "bilangan kurang dari 0";
console.log(hasil);

const x = undefined;
const y = null;
const z = "";
if (x) {
  console.log("x memiliki nilai");
} else {
  console.log("x tidak memiliki nilai");
}

if (y) {
  console.log("y bukan null");
} else {
  console.log("y adalah nil");
}

if (z) {
  console.log("z memiliki nilai");
} else {
  console.log("z tidak memiliki nilai atau ull");
}

if (a > 0 && b > 0 && c > 0) {
  console.log("a, b, dan c adalah positif");
} else {
  console.log("salah satunya bukan positif");
}

for (let i = 1; i <= 10; i++) {
  let str = "";
  for (let j = 1; j <= i; j++) {
    str += "*";
  }
  console.log(str);
}

for (let i = 10; i >= 1; i--) {
  let str = "";
  for (let j = 1; j <= i; j++) {
    str += "*";
  }
  console.log(str);
}

const dataArr = [
  {
    id: 1,
    name: "krisna"
  },
  {
    id: 2,
    name: "hamzah"
  }
]

dataArr.forEach((data) => console.log(data.name))
dataArr.pop();
dataArr.push({id: 3, name: "andi"})
const resultData = dataArr.map(function(data){return data.name.toUpperCase()})
console.log(resultData)
const filterData = dataArr.filter(function(data){ return data.name.includes('k')})
console.log(filterData)
// for (let i = 0; i < 10; i++) {
//   let line = '';
//   for (let j = 0; j < 10 - i; j++) {
//       line += '+';
//   }
//   let stars = i;
//   if (i > 11) {
//       stars = 11;
//   }
//   for (let k = 0; k < stars; k++) {
//       line += '*';
//   }
//   console.log(line);
// }
