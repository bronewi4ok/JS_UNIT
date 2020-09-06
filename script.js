"use strict";

// 20 Objects

const options = {
    name: "test",
    width: 1024,
    height: 1024,
    color: {
        border: "black",
        bg: "red",
    }
};

// console.log(options.name);
// delete options.name;
// console.log(options.name);

for (let key in options) {
    if (typeof (options[key]) === 'object') {
        for (let i in options[key]) {

        }
        console.log(`свойтсво ${key} имеет занчение ${options[key]}`);
    }
}