const inquire = require('inquirer');
const config=require('../../config.js');

const myInitFunction = function (project, args) {
    console.log(project);
    console.log(args);
    inquire.prompt([
        {
            type: 'input',
            name: 'name',
            message: '请输入项目名称'
        }, {
            type: 'list',
            name: 'framework',
            message: '选择框架',
            choices: config.projects
        }]).then((answers) => {
            console.log(answers);
        })


}





const myInit = function (program) {
    program.command('init <framword>')
        .alias('i')
        .description('初始化项目')
        .action(myInitFunction);
}













module.exports = myInit;