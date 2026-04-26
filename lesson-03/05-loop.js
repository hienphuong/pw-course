//1. tinh tong 1 den 100
let sum = 0;
for (let i = 1; i <= 100; i++){
      sum +=i;
}
console.log(`Tong tu 1 den 100 la ${sum}`);
//2. lam bang cuu chuong
for (let i = 2; i <= 9; i++){
    console.log(`bang chuong ${i} la \n`);
    for (let j = 1; j <= 10; j++){
        let x = i*j;
        console.log(`${i} x ${j} = ${x} \n`);
    }
}

//3. tao mang so le tu 1 den 99
const sole = [];

for (let i = 1; i <= 99; i++) {
  if (i % 2 !== 0) {
    sole.push(i);
  }
}

console.log(sole);

//4. in ra ten email dua vao ten va stt

for(let i = 1; i <= 10; i++){
    console.log(`user${i}@gmail.com \n`);
}

const doanhthu = [
    {"thang": 1, "total" : 230},
    {"thang": 2, "total" : 230},
    {"thang": 3, "total" : 230},
    {"thang": 4, "total" : 230},
    {"thang": 5, "total" : 230},
    {"thang": 6, "total" : 230},
    {"thang": 7, "total" : 230},
    {"thang": 8, "total" : 230},
    {"thang": 9, "total" : 230},
    {"thang": 10, "total" : 230},
    {"thang": 12, "total" : 230},
    {"thang": 12, "total" : 230}
];

let tongdoanhthu = 0;
for (let i = 0; i < doanhthu.length; i++){
    tongdoanhthu+= doanhthu[i]["total"];
}
console.log(`tong doanh thu ${tongdoanhthu}`);