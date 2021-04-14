/*NOTES
in objects we call it property
in maps we call the property as key
key: is like a student id so we know that they are different

map is a built in class


ex.
let myMap= new Map();

myMap.set('z', 'shuttle')//z is the key and shuttle is the value of that key
console.log(myMap.get(z));//this will display shuttle in the console
console.log(myMap.size);//tellls how many maps we have
console.log(myMaps.has (z));//it will say true because we have that object 
myMap.delete('z')//will delete the that z map


1)create 10 student records in a map with ID and their full name
2)display the size of your map object
3)traverse through the map object to display all the students
4)look for ID #3(using has method of map object)
5)deleteid #3 record
6) check if its deleted
7) now see the size of your map object
*/

let student= new Map();

student.set("01","Benny Dare");
student.set("02","James Pea");
student.set("03","Jae Ko");
student.set("04","Barabara Penn");
student.set("05","William Smith");
student.set("06","Rose Brown");
student.set("07","Jill Miller");
student.set("08","Peanut Davis");
student.set("09","John Johnson");
student.set("10","Johnny Johnson");

console.log(student.size);
console.log(student);//shows all the student names

for (let item of student) //traverse
console.log(item);

console.log(student.get("03"));//show name of student 03 in console
student.delete("03");//deleting student 03
console.log(student.has(03));//checking if we still have student 03 but because we deleted it is showing false
console.log(student.size);//recouting the student size to see that student 03 is not included
