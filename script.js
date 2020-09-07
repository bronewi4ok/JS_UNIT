"use strict";

// 20 Objects

const options = {
    name: "test",
    width: 1024,
    height: 1024,
    color: {
        border: "black",
        bg: "red",
    },
    makeTaste: function() {
        console.log('test');
    }
};

console.log(Object.keys(options).length);
options.makeTaste();

// let counter = 0;
// for (let key in options) {
//     if (typeof (options[key]) === 'object') {
//         for (let i in options[key]) {
//             console.log(`свойтсво ${i} имеет занчение ${options[key][i]}`);
//             counter++;
//         }
//     } else {
//         console.log(`свойтсво ${key} имеет занчение ${options[key]}`);
//         counter++;
//     }
// }

// console.log(counter);
// console.log('');