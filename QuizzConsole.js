const fs = require('fs');
const path = require('path');
const inquirer = require('inquirer');
const pathTopics = ('./topics')
const ParseFile = require('./ParseFile')
const chalk = require("chalk");

class QuizzConsole {
   static start() {
      console.log(chalk.green(`
######## ########    ###    ##     ## ########  ######## ########  ########  #### ##     ## 
   ##    ##         ## ##   ###   ### ##     ## ##       ##     ## ##     ##  ##  ###   ### 
   ##    ##        ##   ##  #### #### ##     ## ##       ##     ## ##     ##  ##  #### #### 
   ##    ######   ##     ## ## ### ## ########  ######   ########  ##     ##  ##  ## ### ## 
   ##    ##       ######### ##     ## ##        ##       ##   ##   ##     ##  ##  ##     ## 
   ##    ##       ##     ## ##     ## ##        ##       ##    ##  ##     ##  ##  ##     ## 
   ##    ######## ##     ## ##     ## ##        ######## ##     ## ########  #### ##     ## `))
  console.log('\n')
      console.log( chalk.bgGreen.black(`░░░░░░░░░░ Выберите тему квиза! ░░░░░░░░░`)); 
      console.log('\n')
   }

   static async getQA(directory) {
      // Получаем список файлов в директории
      const files = fs.readdirSync(pathTopics)
      
      // Если нет файлов, выводим сообщение и выходим
      if (files.length === 0) {
         console.log('В директории нет файлов для чтения.');
         return;
      }

      // Запрашиваем у пользователя выбор файла
      const { selectedFile } = await inquirer.default.prompt([
         {
            type: 'list',
            name: 'selectedFile',
            message: 'Выберите файл для чтения:',
            choices: files,
         }
      ]);

      // Полный путь к выбранному файлу
      const filePath = path.join(directory, selectedFile);
      
      // Читаем и парсим файл
      const arrayQA = await ParseFile.parse(filePath, 'utf8');

      for (let i = 0; i < arrayQA.length; i++) {
         const {question} = arrayQA[i];
         const {answer} = arrayQA[i];

         // Используем Inquirer для вывода вопроса и получения ответа
         const response = await inquirer.default.prompt([
            {
               type: 'input',
               name: 'userAnswer',
               message: `Вопрос: ${question} Ваш ответ:`,
            }
         ]);

         // Сравниваем ответ пользователя с правильным ответом
         if (response.userAnswer.trim().toLowerCase() === answer.trim().toLowerCase()) {
            console.log(chalk.green.bold("✔ Правильно! 👍"));
         } else {
            console.log(chalk.red.bold(`✗ Неправильно! 💩 Правильный ответ: ${answer}`));
         }
      }
   }
}

// Вызов метода getQA с указанием директории
QuizzConsole.start();
QuizzConsole.getQA("./topics");