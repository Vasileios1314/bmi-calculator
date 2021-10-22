const weightInKg = parseInt(process.argv[2]);
const heightInM = parseFloat(process.argv[3]);

console.log(process.argv[2], process.argv[3]);


const BIM = weightInKg / (heightInM * heightInM);
const roundedBMI = Math.round(BIM);
const idealWeight = 22.5 * (heightInM * heightInM);

console.log(`
****************
FACING THE FACTS
****************

height: ${heightInM} m
weight: ${weightInKg} kg

**************
BMI CALCULATOR
**************

Your BMI is ${roundedBMI}
A BMI under 18.5 is considered underweight
A BMI above 25 is considered overweight
Your ideal weight is ${Math.round(idealWeight)} Kg
`);