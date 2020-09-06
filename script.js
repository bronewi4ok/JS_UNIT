"use strict";
// Callback, lesson 19

function first() {
    setTimeout(
        function () {
            console.log("first");
        }, 500
    );
}

function second() {
    console.log("second");
}

function learnJS(lang, callback) {
    console.log(`Я учу ${lang}`);
    callback();
}

learnJS("JavaScript", second);