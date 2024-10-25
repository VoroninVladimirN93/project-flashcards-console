const inquirer = require('inquirer');
const ParseFile = require ('./ParseFile')

class QuizzConsole {
   static async getQA(path, code) {
      const arrayQA = await ParseFile.parse(path, code);
      
      for (let i = 0; i < arrayQA.length; i++) {
         const question = arrayQA[i].question;
         const answer = arrayQA[i].answer;

         // Используем Inquirer для вывода вопроса и получения ответа
         const response = await inquirer.default.prompt([
            {
               type: 'input',
               name: 'userAnswer',
               message: `Вопрос: ${question} Ваш ответ:` 
            }
         ]);

         // Сравниваем ответ пользователя с правильным ответом
         if (response.userAnswer.trim().toLowerCase() === answer.trim().toLowerCase()) {
            console.log('Правильно!');
         } else {
            console.log(`Неправильно. Правильный ответ: ${answer}`);
         }
      }
   }
}

// Вызов метода getQA
QuizzConsole.getQA("./topics/raccoon_flashcard_data.txt", 'utf8');

// inquirer
// .default
//  .prompt([
//  { type: 'input', name: 'username', message: 'Введи имя:' },
//  {
//  type: 'list',
//  name: "file",
//  message: "Выбери Тему из списка:",
//  choices: [
//  { name: 'Не опаздывал', value: 100 },
//  { name: 'Не опаздывал', value: 200 },
//  { name: 'Не опаздывал', value: 300 },
//  ],
//  },
//  ])
//  .then((answers) => console.log(answers));

// const quiz = new Quiz(questionObjects);
// quiz.start();

//  console.log(inquirer);
 