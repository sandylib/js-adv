const add = (x, y, z) => x + y + z;

const addPartial = x => y => x = add(x, y, z)

const sum = addPartial(5)(6)(7);

