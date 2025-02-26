// 2️⃣ Variables & Data Types (5 Questions)
// Declare a const object, modify its properties, and log the updated object.

const obj = {
    name: "Vansh",
    age: 19,
    email: "vansh@gmail.com",
};

obj.age = 20;
console.log(obj);

// In Constant value cannot be changed but can update parts inside the value

// If you dont want this to happen or want that parts inside value should not be updated

Object.freeze(obj);   // now You can't update any part

obj.age = 25;
console.log(obj);