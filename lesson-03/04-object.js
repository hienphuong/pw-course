const car = {
    made: "Toyota",
    model: "Corola",
    year: 2021
}
console.log(`nam san xuat cua xe la : ${car.year}`);

const per = {
    name: "sand",
    address: {
      street: "ly thuong kiet",
      city: "Ho Chi Minh",
      country: "VN"
    }
  };
console.log(`ban ${per.name} o duong ${per.address.street}`)

const student = {
    name: "sand",
    grades: {
        english : 10,
        math : 5
    }
}
console.log(`mon toan : ${student["grades"]["math"]}`);

const setting = {
    volumn: 5,
    brightness: 10    
}
setting.volumn = 8;
console.log(setting)

const bike = {
    color : "purple"
}
const employee = {
    name : "sand",
    age : 28
}
delete employee.age;
console.log(employee);

const classA = ["An", "Binh", "Chau"];
const classB = ["Dao", "Lan", "Huong"];

const school = {
    classA,
    classB
}
console.log(school.classA, school.classB);