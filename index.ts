// Q2
console.log('Answer 2')
let myName:string="Ibtisam";
console.log('Hello '+myName)

//Q3
console.log('Answer 3')
let upperCase:string = myName.toUpperCase();
let lowerCase:string = myName.toLowerCase();
let titleCase:string = (myName.charAt(0).toUpperCase())+myName.slice(1);
console.log("Uppercase:"+upperCase, "titleCase:"+titleCase, "lowerCase:"+lowerCase)

// Q4
console.log('Answer 4')
console.log("Once Allama Iqbal Said, \"Words, without power, is mere philosophy\".");

// Q5
console.log('Answer 5')
let quote:string="Words, without power, is mere philosophy.";
let author:string="Alama Iqbal";
let message:string=`Once ${author} said, "${quote}"`;

console.log(message)

// Q6 
console.log('Answer 6')

let newName:string="\t Ibtisam \n"
console.log("With white spaces:",newName)
let trimmedName=newName.trim();
console.log("Without white space:",trimmedName)

// Q7 
console.log('Answer 7')
console.log("ADD:",4+4);
console.log("SUB:",12-4);
console.log("MUL:",4*2);
console.log("DIV:",16/2);

// Q8 
console.log('Answer 8')
console.log('_____________________________________________________________________________________________________');
console.log("ADD:",4+4);
console.log('_____________________________________________________________________________________________________');
console.log("SUB:",12-4);
console.log('_____________________________________________________________________________________________________');
console.log("MUL:",4*2);
console.log('_____________________________________________________________________________________________________');
console.log("DIV:",16/2);
console.log('_____________________________________________________________________________________________________');

// Q9 
console.log('Answer 9')
let myFavNum:number=8;
let favNumMess:string=`My favourite Number is : ${myFavNum}`;
console.log(favNumMess)

// Q10
console.log("Answer 10");
// Declared num1 as number with vakue 10;
let num1:number=10;
// Declared num2 as number with vakue 15;
let num2:number=15;
// Printed Result of their addition
console.log(num1+num2);

// Q11
console.log("Answer 11");
let friends:string[] = ["Ali", "Farah", "Saleem"];
console.log(friends[0])
console.log(friends[1])
console.log(friends[2])

// Q12
console.log("Answer 12");
let personalizedMess:string="Hello, hope doing well,"
console.log(personalizedMess+" "+friends[0])
console.log(personalizedMess+" "+friends[1])
console.log(personalizedMess+" "+friends[2])

// Q13 

console.log("Answer 13");
const transportation:string[]=["Honda","Tesla","Mercedes"]
transportation.forEach(element => {
    console.log(`I would like to own a ${element} car.`)
});

// Q14 
console.log("Answer 14");
let guestList:string[]=["Ali","Umer","Farah"]

guestList.forEach(element => {
    console.log(`I have invited ${element} for dinner`)
});

//  Q15
console.log("Answer 15");
console.log(`${guestList[1]} can't make it so as a replacement of him I'll call someone else.`)

guestList[1]="Ibtisam";
console.log("Updated Guest List",guestList)

// Q16
// I want to add adeel and Amara to my guest list

console.log("Answer 16");
console.log("Adding Adeel, Amara and Umer to my guest list as I found a bigger table");
// Adeel to start of Array
guestList.unshift("Adeel");
// Amara in the middle of array
guestList.splice(2,0,"Amara")
// Umer to end of array
guestList.push("Umer")
console.log("New guest List:",guestList);
// Print Invitations again;
guestList.forEach(element=>{
    console.log(`Hello ${element}, you're invited for dinner`)
})


// Q17 
console.log("Answer 17");
console.log(guestList)

console.log('Sorry, guys I have space for two guests only');

while(guestList.length>2){
    guestList.pop()
}
console.log("Updated List",guestList);
guestList.forEach(element=>{
    console.log(`Hey ${element}, you're still invited.`)
})
// making list empty
while(guestList.length>0){
    guestList.pop()
}
console.log('Verify Empty List:',guestList)

// Q 18 
console.log('Answer 18');

let locations:string[]=["Silicon Valley","Los Angeles","Iceland"]
// Array in original Order
console.log("Original Order",locations)
// Array in alphabetical Order
let alphabeticalSort=[...locations].sort();
console.log("Alphabetical Order",alphabeticalSort);
// Reverse Alphabetical order
let reverseAlphaOrder=[...locations].sort((a,b)=>b.localeCompare(a))
console.log('Reverse Alphabetical Order',reverseAlphaOrder);
// reverse Array
let reverseArray=locations.reverse()
console.log('Reversed Array',reverseArray)
// Again Reversed ARRAY
locations.reverse()
console.log('Original after reverse',locations);

// Q19
console.log('Answer 19')
// Since guestList was empty so it'll show zero
console.log('Number of guests invited',guestList.length)

// Q20 
console.log('Answer 20')
let countries:string[] = ["USA", "China", "India", "Indonesia", "Brazil", "Pakistan", "Nigeria", "Bangladesh", "Russia", "Mexico"];
console.log(countries)

// Q21
console.log('Answer 21')

let countriesObj:object[] = [
    { name: "USA", population: 330854058 },
    { name: "China", population: 1439323776 },
    { name: "India", population: 1380004385 },
    { name: "Indonesia", population: 270625568 }
  ];
  
  console.log(countriesObj);
  
  //   Q22 
  console.log('Answer 22')
let intentionalError:string[]=["Ali","Umer"]

intentionalError[3]="Sarim";
// I started counting index from 1 so I inserted Sarim at 3 index it was giving me output with an empty entry like : Answer 22
// [ 'Ali', 'Umer', <1 empty item>, 'Sarim' ]
console.log(intentionalError)
// Solution 1
intentionalError.pop()
intentionalError[2]="Sarim";
// Solution 2
intentionalError.pop()
intentionalError.push("Sarim")
console.log(intentionalError)


// Q23 
console.log('Answer 23')

// Test 1
let car:string="Suzuki";
console.log(car=="Suzuki"?"Car is Suzuki":"Not Suzuki");
// test 2
console.log(2==2)
// test 3
console.log("Ammar">"Ali"?true:false)
// test 4
let age:number=20
console.log(age>=20);
// test 5
let sex:string="male";
console.log(sex=="male")
// Test 6
car="Mehran";
console.log(car=="Suzuki"?"Car is Suzuki":"Not Suzuki");
// test 7
console.log(2!=2)
// test 8
console.log("Ammar"<"Ali"?true:false)
// test 9
age=10
console.log(age>=20);
// test 10
sex="female";
console.log(sex=="male")

// Q24 
console.log("Answer 24");
// test of strings
console.log("Ammar"<"Ali")
// lower case test
let lowerCaseTestVar:string="Amir"
if(lowerCaseTestVar===lowerCaseTestVar.toLowerCase()){
    console.log('It is lower Case')
}else{
    
    console.log('It is not lower Case')
};
// equalities test
console.log(2>3)
console.log(2<3)
console.log(2==2);
console.log(2>=2)
console.log(2<=2)
// AND and OR operators
let a:number=1;
let b:number=0;
if(a||b){
    console.log('a or b one has value other than 0')
}
if(a&&b){
    console.log('a and b both are non zero')
}

// Array test
console.log(Array.isArray(a)?"It is an Array":"Not an array")


// Q25
console.log("Answer 25")
let alien_color:string="green";
if(alien_color=='green'){
    console.log('You Just Earned 5 points')
}
// Failing condition
alien_color='red';
if(alien_color=='green'){
    console.log('You just earned 5 points')
}

// Q26 

console.log('Answer 26');
if(alien_color=='green'){
    console.log('You just earned 5 points')
    
}else if(alien_color!='green'){
    console.log('You just earned 10 points')
    
}

// Q27
console.log('Answer 27')
if(alien_color=='green'){
    console.log('You just earned 5 points')
    
}else if(alien_color=='red'){
    console.log('You just earned 15 points')
    
}else if(alien_color=='yellow'){
    console.log('You just earned 10 points')

}

// Q 28 
console.log('Answer 28')

let personAge:number=100;

if(personAge<2){
console.log('Person is Baby.')
}else if(personAge>=2 && personAge<4){
    console.log('Person is toddler.')
    
}else if(personAge>=4 && personAge<13){
    console.log('Person is kid.')
    
}else if(personAge>=13 && personAge<20){
    console.log('Person is teenager.')
    
}else if(personAge>=20 && personAge<65){
    console.log('Person is adult.')
    
}else{
    console.log('Person is elder.')

}
// Q29 
console.log('Answer 29')
let fav_fruits:string[]=["Apple","Pineapple","Strawberry"];
let found=fav_fruits.indexOf("Orange")
if(found>=0){
    console.log('Fruit is in your list')
}else{
    console.log('Fruit is not in your list')
}

if(fav_fruits.indexOf("Orange")>=0){
    console.log('Orange is in your favorite list')
}else if(fav_fruits.indexOf('Pineapple')>=0){
    console.log('Pineapple is in your favourite list')
}

// Q 30 
let usernames:string[]=["admin","eric","smith","admin"]

usernames.forEach(elem=>{
    if(elem=='admin'){
        console.log('Hey admin would you like to see report')
    }else{
        console.log(`Hello ${elem}, Thanks for logging in again`)
    }
})

// Q31 
console.log('Answer 31')
// Empty the list
while(usernames.length>0){
    usernames.pop()
}
console.log(usernames)
if(usernames.length==0){
    console.log('we need to find users')
}

// Q32 
console.log('Answer 32')
let current_users:string[]=["Amna","Faris","Sami","Ali"];
let new_users:string[]=["Subhan","Umer","AMNA","Amna","Shafia"];

new_users.forEach(elem=>{
    if(current_users.indexOf(elem)>=0){
        console.log(`${elem} username is not available`)
    }else{
        console.log(`${elem} username is available`)
    }
})

// Q 33
console.log('Answer 33')
let ordinal_num:number[]=[1,2,3,4,5,6,7,8,9];
ordinal_num.forEach(elem=>{
    if(elem==1){
        console.log(elem+'st')
    }else if(elem==2){
        console.log(elem+'nd')
    }else if(elem==3){
        console.log(elem+'rd')
    }else{
        console.log(elem+'th')
    }
})

// Q 34 
console.log('Answer 34')
let fav_pizza=["Tandori","Pepperoni","Cheese"]
fav_pizza.forEach(elem=>{
    console.log(`${elem} Pizza`)
})
fav_pizza.forEach(elem=>{
    if(elem=='Tandori'){
console.log('I love Tandori Pizza')
}else if(elem=='Cheese'){
    
    console.log('I like Cheese Pizza more than Tandori')
}else{
        console.log('I like Pepperoni Pizza more than anyother')

    }
})

// Q35 
console.log('Answer 35')
let animals:string[]=["Cat","Dog","Parrot"];

animals.forEach(element => {
    console.log("Animals:",element)
});

animals.forEach(element=>{
    if(element=='Cat'){
        console.log('Cats are cute')
    }else if(element == 'Dog'){
        console.log('Dogs are Scary')
    }else if(element=='Parrot'){
        console.log('Parrot talk sweet')
    }
})

console.log('These animals are pets')

// Q 36 
console.log('Answer 36')
let make_shirt=(size:string,text:string)=>{
console.log(`Shirt created of ${size} size with '${text}' written on it.`)
}
make_shirt("small","I am king")

// Q37
console.log('Answer 37')
let make_shirt2=(size:string="Large",text:string="I love javascript")=>{
    console.log(`Shirt created of ${size} size with '${text}' written on it.`)
    }
make_shirt2()
// Q38
console.log('Answer 38')
let describe_city=(city:string="Karachi",country:string="Pakistan")=>{
    console.log(`${city} is city of ${country} `)
}
describe_city();
describe_city("Los Angeles","USA")
// Q39
let city_country=(city:string,country:string)=>{
    return `"${city}, ${country}"`
}
console.log(city_country("Islamabad","Pakistan"))
console.log(city_country("Chicago","America"))
console.log(city_country("Tokyo","Japan"))

// Q 40 

console.log('Answer 40')

const make_album = (artist: string, album_title: string, tracks?: number) => {
    let albumObj: object = {
      artist,
      album_title,
    };
    if (tracks) {
      albumObj["tracks"] = tracks;
    }
    return albumObj;
  };
  
console.log(make_album('Ali Zafar','Sing a Song'))
console.log(make_album('Atif Aslam','Romantic Love'))
console.log(make_album('Neha Kakar','Love Punjab'))
console.log(make_album('Amme Virk','Malay DHUN',20))

// Q41 
console.log('Answer 41')
const magicians:string[]=["Ali","Umer","Saba"];
const show_magicians=(array:string[])=>{
    array.forEach(elem=>{
        console.log(elem)
    })
}
show_magicians(magicians)

// Q42 
console.log('Answer 42')
const make_great = (array: string[]) => {
    for (let i = 0; i < array.length; i++) {
      array[i] = `the Great ${array[i]}`;
    }
  };
  

//   make_great(magicians);
  show_magicians(magicians); // prints "the Great Harry Houdini", "the Great David Blaine", etc.
  // Q43
  console.log('Answer 43')

  const make_great2=(array:string[])=>{
let newArray:string[]=[];
for(let i=0 ;i<=array.length;i++){
    newArray.push(`The Great ${array[i]}`)
}
return newArray
  }

  console.log(make_great2(magicians))
  show_magicians(magicians)

// Q44 
console.log('Answer 44')
let sandwich_customers=["Ali","Umer","Sana"];

const sandwich_ordered=(order_list:string[])=>{
    console.log(`You have ${order_list.length} new sandwich orders`)
}
sandwich_ordered(sandwich_customers)
//   Q 45
console.log('Answer 45') 
let make_car=(manufacturer:string,mode_name:string,color?:string,optional_feature?:string)=>{
    let carObj={
        manufacturer,mode_name,color,optional_feature
    }
  
return carObj
}

console.log(make_car('Honda',"Civic","Black","Auto-Lock"))