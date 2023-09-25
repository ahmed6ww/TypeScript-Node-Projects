import inquirer from "inquirer";
import { quiz } from "./quiz.js";
quiz;
async function main() {
    let score = 0;
    let user_answers = [];
    for (let question of quiz) {
        let answer = await inquirer.prompt([question]);
        user_answers.push(answer[quiz.name]);
    }
    for (let i = 0; i < quiz.length; i++) {
        const userAnswer = user_answers[i];
        const correctAnswer = quiz[i].correctanswer;
        if (userAnswer === correctAnswer) {
            console.log(`Question ${i + 1}: Correct!`);
            score++;
        }
        else {
            console.log(`Question ${i + 1}: Incorrect.`);
        }
    }
}
console.log();
main();
