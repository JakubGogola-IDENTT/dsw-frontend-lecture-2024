let d = 5;   // 0101 in binary
let e = 1;   // 0001 in binary

// AND
console.log(d & e); // 1 (0001)

// OR
console.log(d | e); // 5 (0101)

// XOR
console.log(d ^ e); // 4 (0100)

// NOT
console.log(~d); // -6

// Left shift
console.log(d << 1); // 10 (1010)

// Right shift
console.log(d >> 1); // 2 (0010)

// Zero-fill right shift
console.log(d >>> 1); // 2 (0010)
