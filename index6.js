const weightInKg = parseInt(process.argv[2]);
const heightInM = parseFloat(process.argv[3]);
const age = parseInt(process.argv[4]);
let dailyExercise = process.argv[5];
let gender = process.argv[6];


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

const weightToLose = weightInKg - idealWeight;
const dietTime = weightToLose / 0.5;
const dietCalories = caloriesPerDay - 500;

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