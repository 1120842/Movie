'use strict';

const { delete } = require("vue/types/umd");

const options = {
    name: 'test',
    width: 1024,  // 
    height: 1024,
    colors: {
        border: 'black',
        bg: 'red'
    }
};

console.log(options.name);

delete options.name;

console.log(options);