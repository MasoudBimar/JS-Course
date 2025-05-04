// Destructuring
// let x = 2;
// let y = 3;

// [x, y] = [y, x];

// console.log(x,y);

let a = 1;
let b = 2;

({ a, b } = { a: 3, b: 4 });

// const obj = { x: 1, y: 4, z: 7, p: 3, q: 5 };
//  ({ p, q, ...rest }) = obj;
// const { ['key']: x} = obj;
// console.log(p, q);

// Template Literal

let category = "music";

let id = 123;

let url1 = "http://apiserver/" + category + "/" + id;
let url2 = `http://apiserver/${category}/${id}`;