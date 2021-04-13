/* scenario:
Mark and John are trying to compare their BMI(body Mass Index)
BMI = mass/height**2 =Mass
BMI = Mass /(height*height).
(mass in kg and height in meter)
*/

/*
test data1: mark weight 78kg and 1.69m tall
            John weight 92kg and 1.95m tall

print whether or not mark has a higher BMI than john
*/
//declaring a variable 
const markWeight= 78;
const markHeight= 1.69;
const johnWeight= 92;
const johnHeight= 1.95;

//using declared numbers in formula to calculate BMI of weight and BMI of height for both Mark and John
const bmiMW = markWeight/markHeight**2;
const bmiMH = bmiMW/(markHeight*markHeight);
const bmiJW = johnWeight/johnHeight**2;
const bmiJH= bmiJW/(johnHeight*johnHeight);

//declaring boolean by comparing the BMI weight of Mark to weight of John (same with the height)
const higherBMIW= bmiMW > bmiJW;
const higherBMIH= bmiMH > bmiJH;

//desplaying mark and johns weight and the boolean=true (same with the height)
console.log(bmiMW, bmiJW, higherBMIW);
console.log(bmiMH, bmiJH, higherBMIH);

