const inquirer = require('inquirer');
inquirer
.default
 .prompt([
 { type: 'input', name: 'username', message: 'Введи имя:' },
 {
 type: 'list',
 name: 'bonuses',
 message: 'На сколько ты опоздал?',
 choices: [
 { name: 'Не опаздывал', value: 0 },
 { name: 'На 2-3 минутки', value: 2 },
 { name: 'Опоздал и не сообщил', value: 5 },
 ],
 },
 ])
 .then((answers) => console.log(answers));
 