#!/usr/bin/env node

//console.log('mycli');


// console.log(process.argv);
// if(process.argv[2]=='--help'){
//     console.log('帮助');
// }


const {program}=require('commander');

const myhelp=require('../lib/core/help');
const myInit=require('../lib/core/init');

//program.option('-f <framwordk>', '使用框架初始化');

//myhelp(program);
myInit(program);


program.parse(process.argv);

