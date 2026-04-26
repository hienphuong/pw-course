//1. ham phep nhan
function multifly(a , b){
    return a*b;
} 

console.log(multifly(3,4));

// 2. ham tim min
function findMin(a , b, c){
   let min = a;
   if (b < min){
    min = b;
   }if(c<min){
    min = c;
   }
   return min;
} 

console.log(findMin(3,4,12));

//3. get top students
function topStudents(students, threshold) {
    let result = [];
    for (let i = 0; i < students.length; i++) {
        if (students[i].score >= threshold) {
            result.push(students[i]);
        }
    }
    return result;
}
const student = [
    { "name": "Sand", "score": 8},
    { "name": "Briant", "score": 7},
    { "name": "Alex", "score": 6}
]
let thredhold = 7;
let result = topStudents(student, thredhold);
console.log(result);

// ham caculateiIterest(principal,rate,year)
function caculateiIterest(principal,rate,year){
    let sum = 0;
    sum = principal+ (principal*rate*year)/100;
    return sum;
}

const interest = caculateiIterest(120,0.5,2);
console.log(interest);
