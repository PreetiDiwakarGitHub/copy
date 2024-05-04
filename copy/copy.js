// deep copy 

// let person = {
//     fname: 'Preeti',
//     age:30,
//     address:{
//         city:'kanpur',
//     }
// };

// const deepcopy = JSON.parse(JSON.stringify(person));
// deepcopy.address.city = 'delhi';
// console.log(person.address.city);
// console.log(deepcopy.address.city);


// shallow copy


// let person = {
//         fname: 'Preeti',
//         age:30,
//         address:{
//             city:'kanpur',
//         }
//     };
//     const shallow = Object.assign({},person);
//     shallow.address.city = 'delhi';
//     console.log(person.address.city);
//     console.log(shallow.address.city);


// Game

// let snake={
//     value:0,

//     ladder(){
//         this.value = this.value+10;
//     },
//     snakegame(){
//         this.value=0;

//     },
//     move(){
//         let randomnumber
//     }

// }

// let person = {
//     fname :'preeti',
//     last:'diwakar',
//     address:{
//         city:'delhi',
//     }
    
// }
// let shallow = {...person};
// console.log(shallow);


// const arr = (num,num2) =>{
//     console.log(num+num2);
// }
// arr(3,4);


// let person={
//     name:"preeti",
//     age:19,
// }
// person.class = 10;

// console.log('age' in person)

// for(let key in person){
//     console.log(key+person[key]);
// }



// let firtname = {
//     fname:'preeti',
//     last:'diwakar',
// }
// firtname.age=20;

// console.log('user' in firtname)

// for(let key in firtname){
//     console.log(key+firtname[key])
// }

// function student(first,last,age,clss){
//     this.firstname=first;
//     this.lastname=last;
//     this.age=age;
//     this.class=clss;
// }
// student.prototype.address="kanpur";

// var student1 = new student("preeti","diwakar",19,12);
// console.log(student1.address)


// function person(first,last,age){
//     this.firstname=first;
//     this.lastname=last;
//     this.age=age;
// }

// var student = new person("preet","diwakar",19)
// console.log(student)



// let person={
//     fname:'preeti',
//     last:'diwakar',
//     age:'19',
// }
// let user=person;
// user.fname='priyanka';

// console.log(person);


// let person={
//     fname:'preeti',
//     last:'diwakar',
//     age:'19',
// }
// let user=Object.assign({},person);

// user.fname='priyanka';

// console.log(person);


// let person={
//     fname:'preeti',
//     last:'diwakar',
//     address:{
//         city:'kanpur',
//         age:20,
//     }
// }
// let user = Object.assign({},person);
// user.address.city='delhi',
// console.log(person);


// let person={
//     fname:'preeti',
//     last:'diwakar',
//     address:{
//         city:'kanpur',
//         age:20,
//     },
//     getDate:function(){
//         return("preeti")
//     }
// }


// let user = _.clonedeep(person);
// user.address.city='delhi',
// console.log(getDate);


// hosting

// x=7;
// console.log(x);
// var x;



// git init
// git add README.md
// git commit -m "first commit"
// git branch -M main
// git remote add origin https://github.com/PreetiDiwakarGitHub/copy.git
// git push -u origin main