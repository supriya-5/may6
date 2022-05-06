//objects
//objects are collection of properties and methods.
//objects have keys which are converted to string types,the properties and methods do not follow the insertion order.

//create an object

// let mobile = {
//     brand : "vivo",
//     weight : 200,
//     isworking : true,
//     11 : "android version",
//     displayInfo : function(){
//         console.log(`the brand of my mobile is ${mobile.brand} and the weight is ${mobile.weight} which is in the working condition ${mobile.isworking}, also with a android version of ${mobile[11]}`);
//     }
// }
// console.log(mobile);
// console.log(mobile. displayInfo());

// console.log(delete mobile.isworking);

// mobile.camera = "32px";
// console.log(mobile);

// let mobile1 = {}

//  mobile1.brand = "oppo";
//  mobile1.weight = 200;
//  mobile1.camera = "32px";

//  console.log(mobile1.brand);

// function Mobile2(brand,weight,camera){
//     this.brand = brand;
//     this.weight =weight;
//     this.camera = camera;
// }
// let oneplus = new Mobile2("oneplus","120","34px")
// let apple = new Mobile2("apple","120","34px")

// console.log(apple);
// console.log(oneplus);

// console.log(Object.keys(apple));
// console.log(Object.values(apple));

// for(const [key,value] of Object.entries(apple)){
//     console.log(key,value);
// }

// //in a object this refers to the obj when we use this keyword alone,then it points to global obj.
// //in a function , this refers to parent obj.

// value =23;
// console.log(value);
// console.log(this);

// //spread operator

// let arr1 = [1,2,3,4,5];
// let arr2 = [6,7,8,9,10];
// console.log(arr1.concat(arr2));
// let arr3 = [...arr1,...arr2];
// console.log(arr3);

//Create two students having properties as name, rollno, class, showDetails using Object Constructor.

function Students(name,rollno,course){
    this.name = name;
    this.rollno = rollno;
    this.class = course;
}

let student1 = new Students("vishnu",32,"MERN");
let student2 = new Students("gayathri",33,"MEAN");

console.log(student1);
console.log(student2);

console.log(Object.keys(student1));
console.log(Object.values(student1));

console.log(Object.keys(student2));
console.log(Object.values(student2));


for(const [key,value] of Object.entries(student1)){
    console.log(key,value);
    console.log(key);
    console.log(value);
}
for(const [key,value] of Object.entries(student2)){
    console.log(key,value);
    console.log(key);
    console.log(value);
}
