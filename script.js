console.log('hello world')


/*const username

function greet(username="there"){//inside brackets we can give the parameters
    console.log(` hey ${username},welcome to JS`)
}//function decaration

 
greet(username) //function call*/
while(truth)
console.log(`
press curresponding number to use that option
    1-mutiply
    2-Add
    3-Divide
    4-Subtractt
`)

let option = parseInt(prompt('Select your option'));
const num1 = parseInt(prompt('Enter num1:'))
const num2 = parseInt(prompt('Enter num2:'))
let answer
switch (option) {
    case 1:answer = multiply(num1 , num2)
        
        break;
    case 2: add(num1,num2)
        break;
    case 3:devide(num1 , num2)
        
        break;
    case 4:subtract(num1 , num2)
        break;
      

    default: alert('invalid number')
        break;
}
console.log(answer)
function multiply(num1 , num2){
    return num1 * num2
}

function add(num1 , num2){
    return num1 + num2
}

function devide(num1 , num2){
    return num1 / num2
}
function subtract(num1 , num2){
    return num1 - num2
}
}
const facts = [
    "Cats sleep for approximately 70% of their lives.",
    "A group of cats is called a clowder.",
    "Cats have five toes on their front paws but only four toes on their back paws.",
    "The average cat runs at a speed of 30 miles per hour.",
    "Cats have a specialized collarbone that allows them to always land on their feet.",
    "A cat's nose is as unique as a human's fingerprint.",
    "Cats have a reflective layer behind their retinas called the tapetum lucidum, which enhances their night vision.",
    "The average cat spends around 30-50% of their waking hours grooming themselves.",
    "Cats have a specialized communication method using scent glands located on their cheeks.",
    "Cats have a great sense of balance, thanks to their inner ear structures."
  // ];
  
  function generateRandomFact() {
    const factElement = document.getElementById("fact");
    const randomFact = facts[Math.floor(Math.random() * facts.length)];
    factElement.textContent = randomFact;
  }
  
  const generateBtn = document.getElementById("generate-btn");
  generateBtn.addEventListener("click", generateRandomFact);
  
  // Initial fact generation
  generateRandomFact();

  const timesToRepeat= 10;
  const charecter = 'A';
  let answer= ''

 for(let i=0; i<=timesToRepeat; i++ )
 {
  answer = answer + charecter;
  
  
 }

  console.log(answer)
  