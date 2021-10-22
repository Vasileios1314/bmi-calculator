const weightInKg = parseInt(process.argv[2]);
const heightInM = parseFloat(process.argv[3]);

console.log(process.argv[2], process.argv[3]);


const BIM = weightInKg / (heightInM * heightInM);
const roundedBMI = Math.round(BIM);

console.log(`
****************
FACING THE FACTS
****************

height: ${heightInM}
weight: ${weightInKg}

**************
BMI CALCULATOR
**************

Your BMI is ${roundedBMI}
A BMI under 18.5 is considered underweight
A BMI above 25 is considered overweight
`);