const add = (x, y, z) => x + y + z;

const add1 = add.bind(null, 1);
console.log(add1(2, 3));