const colorkeywords = require('./colorkeywords.js')
const questions = [
    //color

{
    name: 'color',
    message: 'what is the color of your logo?',
    type:'list',
    choices : ['red','blue','yellow'],
},

{
    name: 'shape',
    message: 'what is the shape of your logo?',
    type: 'list',
    choices: ['circle','square','triangle'],
},

{
   type: "input"
   name: "shapeColor",
   message: "Enter the shape color keyword",
   when: (answers)=> {
    if(answers.shapecolorchoice === 'color keyword') {
        return true;
    }
    return false;
   } 
},
validate: (answer) => {
    let answerLowercase = answer.toLowerCase();
    for (var i = 0, len = colorkeywords.length; i < len; ++i){
        if (answerLowercase.indexof(colorKeywords[i]) != -1){
           return true;
        }}
        return console.log("\n please enter a valid color keyword")
},
