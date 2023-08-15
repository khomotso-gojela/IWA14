// firstName = 'John';
// age = 35;
// hobby = 'Coding';

// const logTwice = () => {
//   console(parameter)
//   console(parameter)
// }

// function hobby () {
//   logTwice(`Hello, ${name} (${age}). I love ${hobby}!`)
// }

// hobby()

// solution 

const firstName = 'John';
const age = 35;
const favHobby = 'Coding';

const logTwice = (parameter) => {
  console.log(parameter)
  console.log(parameter)
}

const hobby = function () {
  logTwice(`Hello, ${firstName} (${age}). I love ${favHobby}!`)
}

hobby()