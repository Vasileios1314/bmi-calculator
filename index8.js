if (process.argv.length !== 7) {
    console.log(`
      You gave ${process.argv.length - 2} arguments(s) to the program
  
      Please provide 5 arguments for
      
      weight (kg), 
      height (m), 
      age (years), 
      whether you exercise daily (yes or no)
      and your gender (m or f)
      
      Example:
  
      $ node index.js 82 1.79 32 yes m
    `);
  
    process.exit();
  }
  
  if (age < 20){
      console.log("This BMI calculator is designed for people over 20")
      process.exit();
  }

  if (weightInKg < 30 && weightInKg > 300){
      console.log("Please provide a number for weight in kilograms between 30 and 300")
      process.exit();
  }

  if (dailyExercise !== "yes" && dailyExercise !== "no"){
      console.log("Please specify if you exercise daily with 'yes' or 'no'")
      process.exit();
  }

const weightInKg = parseInt(process.argv[2]);
const heightInM = parseFloat(process.argv[3]);
const age = parseInt(process.argv[4]);
let dailyExercise = process.argv[5];
let gender = process.argv[6];

if (isNaN(weightInKg) || isNaN(heightInM) || isNaN(age)){
    console.log(`
    Please make sure weight, height and age are numbers:

    weight (kg) example: 82 | your input: ${process.argv[2]}
    height (m) example 1.79 | your input: ${process.argv[3]}
    age (years) example 32  | your input: ${process.argv[4]} 

    $ node index.js 82 1.79 32 yes m
  `);

  process.exit();
}


let BMI = weightInKg / (heightInM * heightInM);
const idealWeight = 22.5 * (heightInM * heightInM);
const heightInCm = heightInM * 100;

let bmr;

if (gender === "m"){
    bmr = 10 * weightInKg + 6.25 * heightInCm - 5 * age + 50;
}else if(gender = "f"){
    bmr = 10 * weightInKg + 6.25 * heightInCm - 5 * age - 150;
}

let caloriesPerDay;

if (dailyExercise === "yes"){
    caloriesPerDay = bmr * 1.6;
}else {
    caloriesPerDay = bmr * 1.4;
}

/*const dailyCalories = dailyExercise === "yes" ? BMR * 1.6 : BMR * 1.4;
ternary operator */

let weightToLose = weightInKg - idealWeight;
const dietTime = Math.abs(weightToLose / 0.5);

let dietCalories;

if(weightToLose > 0){
     dietCalories = caloriesPerDay - 500;
}else{
 dietCalories = caloriesPerDay + 500;
};

console.log(`
****************
FACING THE FACTS
****************

height: ${heightInM} m
weight: ${weightInKg} kg
age: ${age} years old
daily exercise: ${dailyExercise}
gender: ${gender}

**************
BMI CALCULATOR
**************

Your BMI is ${Math.round(BMI)}
A BMI under 18.5 is considered underweight.
A BMI above 25 is considered overweight.
Your ideal weight is ${Math.round(idealWeight)} Kg
With a normal lifestyle you burn ${Math.round(caloriesPerDay)} calories per day.

**********
DIET PLAN
**********

If you want to reach your ideal weight of ${Math.round(idealWeight)} kg:

Eat ${Math.round(dietCalories)} calories a day
For ${Math.round(dietTime)} weeks
`);