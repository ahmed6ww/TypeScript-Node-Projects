import inquirer from "inquirer";
let quiz = await inquirer.prompt([
    {
        name: `q1`,
        type: `list`,
        message: `What is the Capital of France`,
        choices: [`Berlin`, `Rome`, `London`, `Paris`],
        correctanswer: `Paris`,
    },
    {
        name: `q2`,
        type: `list`,
        message: `Which planet is known as the "Red Planet"?`,
        choices: [`Venus`, `Mars`, `Jupiter`, `Earth`],
        correctanswer: `Earth`,
    },
    {
        name: `q3`,
        type: `list`,
        message: `Who painted the Mona Lisa?`,
        choices: [`Vincent van Gog`, `Pablo Picasso`, `Leonardo da Vinci`, `Michelangelo`],
        correctanswer: `Leonardo da Vinci`,
    },
    {
        name: `q4`,
        type: `list`,
        message: `What is the largest mammal on Earth?`,
        choices: [`African Elephant`, `Blue Whale`, `Giraffe`, `White Rhinoceros`],
        correctanswer: `Blue Whale`,
    },
    {
        name: `q5`,
        type: `list`,
        message: `Which famous scientist developed the theory of relativity?`,
        choices: [`Isaac Newton`, `Galileo Galilei`, `Albert Einstein`, ` Stephen Hawking`],
        correctanswer: `Albert Einstein`,
    },
    {
        name: `q6`,
        type: `list`,
        message: `What is the chemical symbol for gold?`,
        choices: [`Ag`, ` Au`, `Go`, `Gd`],
        correctanswer: `Au`,
    },
    {
        name: `q7`,
        type: `list`,
        message: ` Who wrote the play "Romeo and Juliet"?`,
        choices: [` Mark Twain`, ` Charles Dickens`, `William Shakespeare`, ` Jane Austen`],
        correctanswer: `William Shakespeare`,
    },
    {
        name: `q8`,
        type: `list`,
        message: ` In which country did the Olympic Games originate?`,
        choices: [`  Greece`, ` Rome`, ` Egypt`, ` Greece`],
        correctanswer: `Greece`,
    },
    {
        name: `q9`,
        type: `list`,
        message: `Which gas do plants use for photosynthesis?`,
        choices: [`Oxygen`, ` Carbon dioxide`, ` Nitrogen`, `Hydrogen`],
        correctanswer: ` Carbon dioxide`,
    },
    {
        name: `q10`,
        type: `list`,
        message: `What is the longest river in the world?`,
        choices: [`Nile`, ` Amazon`, `Mississippi`, `Yangtze`],
        correctanswer: `Nile`,
    },
]);
export { quiz };
