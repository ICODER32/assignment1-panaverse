var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// Q2
console.log('Answer 2');
var myName = "Ibtisam";
console.log('Hello ' + myName);
//Q3
console.log('Answer 3');
var upperCase = myName.toUpperCase();
var lowerCase = myName.toLowerCase();
var titleCase = (myName.charAt(0).toUpperCase()) + myName.slice(1);
console.log("Uppercase:" + upperCase, "titleCase:" + titleCase, "lowerCase:" + lowerCase);
// Q4
console.log('Answer 4');
console.log("Once Allama Iqbal Said, \"Words, without power, is mere philosophy\".");
// Q5
console.log('Answer 5');
var quote = "Words, without power, is mere philosophy.";
var author = "Alama Iqbal";
var message = "Once ".concat(author, " said, \"").concat(quote, "\"");
console.log(message);
// Q6 
console.log('Answer 6');
var newName = "\t Ibtisam \n";
console.log("With white spaces:", newName);
var trimmedName = newName.trim();
console.log("Without white space:", trimmedName);
// Q7 
console.log('Answer 7');
console.log("ADD:", 4 + 4);
console.log("SUB:", 12 - 4);
console.log("MUL:", 4 * 2);
console.log("DIV:", 16 / 2);
// Q8 
console.log('Answer 8');
console.log('_____________________________________________________________________________________________________');
console.log("ADD:", 4 + 4);
console.log('_____________________________________________________________________________________________________');
console.log("SUB:", 12 - 4);
console.log('_____________________________________________________________________________________________________');
console.log("MUL:", 4 * 2);
console.log('_____________________________________________________________________________________________________');
console.log("DIV:", 16 / 2);
console.log('_____________________________________________________________________________________________________');
// Q9 
console.log('Answer 9');
var myFavNum = 8;
var favNumMess = "My favourite Number is : ".concat(myFavNum);
console.log(favNumMess);
// Q10
console.log("Answer 10");
// Declared num1 as number with vakue 10;
var num1 = 10;
// Declared num2 as number with vakue 15;
var num2 = 15;
// Printed Result of their addition
console.log(num1 + num2);
// Q11
console.log("Answer 11");
var friends = ["Ali", "Farah", "Saleem"];
console.log(friends[0]);
console.log(friends[1]);
console.log(friends[2]);
// Q12
console.log("Answer 12");
var personalizedMess = "Hello, hope doing well,";
console.log(personalizedMess + " " + friends[0]);
console.log(personalizedMess + " " + friends[1]);
console.log(personalizedMess + " " + friends[2]);
// Q13 
console.log("Answer 13");
var transportation = ["Honda", "Tesla", "Mercedes"];
transportation.forEach(function (element) {
    console.log("I would like to own a ".concat(element, " car."));
});
// Q14 
console.log("Answer 14");
var guestList = ["Ali", "Umer", "Farah"];
guestList.forEach(function (element) {
    console.log("I have invited ".concat(element, " for dinner"));
});
//  Q15
console.log("Answer 15");
console.log("".concat(guestList[1], " can't make it so as a replacement of him I'll call someone else."));
guestList[1] = "Ibtisam";
console.log("Updated Guest List", guestList);
// Q16
// I want to add adeel and Amara to my guest list
console.log("Answer 16");
console.log("Adding Adeel, Amara and Umer to my guest list as I found a bigger table");
// Adeel to start of Array
guestList.unshift("Adeel");
// Amara in the middle of array
guestList.splice(2, 0, "Amara");
// Umer to end of array
guestList.push("Umer");
console.log("New guest List:", guestList);
// Print Invitations again;
guestList.forEach(function (element) {
    console.log("Hello ".concat(element, ", you're invited for dinner"));
});
// Q17 
console.log("Answer 17");
console.log(guestList);
console.log('Sorry, guys I have space for two guests only');
while (guestList.length > 2) {
    guestList.pop();
}
console.log("Updated List", guestList);
guestList.forEach(function (element) {
    console.log("Hey ".concat(element, ", you're still invited."));
});
// making list empty
while (guestList.length > 0) {
    guestList.pop();
}
console.log('Verify Empty List:', guestList);
// Q 18 
console.log('Answer 18');
var locations = ["Silicon Valley", "Los Angeles", "Iceland"];
// Array in original Order
console.log("Original Order", locations);
// Array in alphabetical Order
var alphabeticalSort = __spreadArray([], locations, true).sort();
console.log("Alphabetical Order", alphabeticalSort);
// Reverse Alphabetical order
var reverseAlphaOrder = __spreadArray([], locations, true).sort(function (a, b) { return b.localeCompare(a); });
console.log('Reverse Alphabetical Order', reverseAlphaOrder);
// reverse Array
var reverseArray = locations.reverse();
console.log('Reversed Array', reverseArray);
// Again Reversed ARRAY
locations.reverse();
console.log('Original after reverse', locations);
// Q19
console.log('Answer 19');
// Since guestList was empty so it'll show zero
console.log('Number of guests invited', guestList.length);
// Q20 
console.log('Answer 20');
var countries = ["USA", "China", "India", "Indonesia", "Brazil", "Pakistan", "Nigeria", "Bangladesh", "Russia", "Mexico"];
console.log(countries);
// Q21
console.log('Answer 21');
var countriesObj = [
    { name: "USA", population: 330854058 },
    { name: "China", population: 1439323776 },
    { name: "India", population: 1380004385 },
    { name: "Indonesia", population: 270625568 }
];
console.log(countriesObj);
//   Q22 
console.log('Answer 22');
var intentionalError = ["Ali", "Umer"];
intentionalError[3] = "Sarim";
// I started counting index from 1 so I inserted Sarim at 3 index it was giving me output with an empty entry like : Answer 22
// [ 'Ali', 'Umer', <1 empty item>, 'Sarim' ]
console.log(intentionalError);
// Solution 1
intentionalError.pop();
intentionalError[2] = "Sarim";
// Solution 2
intentionalError.pop();
intentionalError.push("Sarim");
console.log(intentionalError);
// Q23 
console.log('Answer 23');
// Test 1
var car = "Suzuki";
console.log(car == "Suzuki" ? "Car is Suzuki" : "Not Suzuki");
// test 2
console.log(2 == 2);
// test 3
console.log("Ammar" > "Ali" ? true : false);
// test 4
var age = 20;
console.log(age >= 20);
// test 5
var sex = "male";
console.log(sex == "male");
// Test 6
car = "Mehran";
console.log(car == "Suzuki" ? "Car is Suzuki" : "Not Suzuki");
// test 7
console.log(2 != 2);
// test 8
console.log("Ammar" < "Ali" ? true : false);
// test 9
age = 10;
console.log(age >= 20);
// test 10
sex = "female";
console.log(sex == "male");
// Q24 
console.log("Answer 24");
// test of strings
console.log("Ammar" < "Ali");
// lower case test
var lowerCaseTestVar = "Amir";
if (lowerCaseTestVar === lowerCaseTestVar.toLowerCase()) {
    console.log('It is lower Case');
}
else {
    console.log('It is not lower Case');
}
;
// equalities test
console.log(2 > 3);
console.log(2 < 3);
console.log(2 == 2);
console.log(2 >= 2);
console.log(2 <= 2);
// AND and OR operators
var a = 1;
var b = 0;
if (a || b) {
    console.log('a or b one has value other than 0');
}
if (a && b) {
    console.log('a and b both are non zero');
}
// Array test
console.log(Array.isArray(a) ? "It is an Array" : "Not an array");
// Q25
console.log("Answer 25");
var alien_color = "green";
if (alien_color == 'green') {
    console.log('You Just Earned 5 points');
}
// Failing condition
alien_color = 'red';
if (alien_color == 'green') {
    console.log('You just earned 5 points');
}
// Q26 
console.log('Answer 26');
if (alien_color == 'green') {
    console.log('You just earned 5 points');
}
else if (alien_color != 'green') {
    console.log('You just earned 10 points');
}
// Q27
console.log('Answer 27');
if (alien_color == 'green') {
    console.log('You just earned 5 points');
}
else if (alien_color == 'red') {
    console.log('You just earned 15 points');
}
else if (alien_color == 'yellow') {
    console.log('You just earned 10 points');
}
// Q 28 
console.log('Answer 28');
var personAge = 100;
if (personAge < 2) {
    console.log('Person is Baby.');
}
else if (personAge >= 2 && personAge < 4) {
    console.log('Person is toddler.');
}
else if (personAge >= 4 && personAge < 13) {
    console.log('Person is kid.');
}
else if (personAge >= 13 && personAge < 20) {
    console.log('Person is teenager.');
}
else if (personAge >= 20 && personAge < 65) {
    console.log('Person is adult.');
}
else {
    console.log('Person is elder.');
}
// Q29 
console.log('Answer 29');
var fav_fruits = ["Apple", "Pineapple", "Strawberry"];
var found = fav_fruits.indexOf("Orange");
if (found >= 0) {
    console.log('Fruit is in your list');
}
else {
    console.log('Fruit is not in your list');
}
if (fav_fruits.indexOf("Orange") >= 0) {
    console.log('Orange is in your favorite list');
}
else if (fav_fruits.indexOf('Pineapple') >= 0) {
    console.log('Pineapple is in your favourite list');
}
// Q 30 
var usernames = ["admin", "eric", "smith", "admin"];
usernames.forEach(function (elem) {
    if (elem == 'admin') {
        console.log('Hey admin would you like to see report');
    }
    else {
        console.log("Hello ".concat(elem, ", Thanks for logging in again"));
    }
});
// Q31 
console.log('Answer 31');
// Empty the list
while (usernames.length > 0) {
    usernames.pop();
}
console.log(usernames);
if (usernames.length == 0) {
    console.log('we need to find users');
}
// Q32 
console.log('Answer 32');
var current_users = ["Amna", "Faris", "Sami", "Ali"];
var new_users = ["Subhan", "Umer", "AMNA", "Amna", "Shafia"];
new_users.forEach(function (elem) {
    if (current_users.indexOf(elem) >= 0) {
        console.log("".concat(elem, " username is not available"));
    }
    else {
        console.log("".concat(elem, " username is available"));
    }
});
// Q 33
console.log('Answer 33');
var ordinal_num = [1, 2, 3, 4, 5, 6, 7, 8, 9];
ordinal_num.forEach(function (elem) {
    if (elem == 1) {
        console.log(elem + 'st');
    }
    else if (elem == 2) {
        console.log(elem + 'nd');
    }
    else if (elem == 3) {
        console.log(elem + 'rd');
    }
    else {
        console.log(elem + 'th');
    }
});
// Q 34 
console.log('Answer 34');
var fav_pizza = ["Tandori", "Pepperoni", "Cheese"];
fav_pizza.forEach(function (elem) {
    console.log("".concat(elem, " Pizza"));
});
fav_pizza.forEach(function (elem) {
    if (elem == 'Tandori') {
        console.log('I love Tandori Pizza');
    }
    else if (elem == 'Cheese') {
        console.log('I like Cheese Pizza more than Tandori');
    }
    else {
        console.log('I like Pepperoni Pizza more than anyother');
    }
});
// Q35 
console.log('Answer 35');
var animals = ["Cat", "Dog", "Parrot"];
animals.forEach(function (element) {
    console.log("Animals:", element);
});
animals.forEach(function (element) {
    if (element == 'Cat') {
        console.log('Cats are cute');
    }
    else if (element == 'Dog') {
        console.log('Dogs are Scary');
    }
    else if (element == 'Parrot') {
        console.log('Parrot talk sweet');
    }
});
console.log('These animals are pets');
// Q 36 
console.log('Answer 36');
var make_shirt = function (size, text) {
    console.log("Shirt created of ".concat(size, " size with '").concat(text, "' written on it."));
};
make_shirt("small", "I am king");
// Q37
console.log('Answer 37');
var make_shirt2 = function (size, text) {
    if (size === void 0) { size = "Large"; }
    if (text === void 0) { text = "I love javascript"; }
    console.log("Shirt created of ".concat(size, " size with '").concat(text, "' written on it."));
};
make_shirt2();
// Q38
console.log('Answer 38');
var describe_city = function (city, country) {
    if (city === void 0) { city = "Karachi"; }
    if (country === void 0) { country = "Pakistan"; }
    console.log("".concat(city, " is city of ").concat(country, " "));
};
describe_city();
describe_city("Los Angeles", "USA");
// Q39
var city_country = function (city, country) {
    return "\"".concat(city, ", ").concat(country, "\"");
};
console.log(city_country("Islamabad", "Pakistan"));
console.log(city_country("Chicago", "America"));
console.log(city_country("Tokyo", "Japan"));
// Q 40 
console.log('Answer 40');
var make_album = function (artist, album_title, tracks) {
    var albumObj = {
        artist: artist,
        album_title: album_title
    };
    if (tracks) {
        albumObj["tracks"] = tracks;
    }
    return albumObj;
};
console.log(make_album('Ali Zafar', 'Sing a Song'));
console.log(make_album('Atif Aslam', 'Romantic Love'));
console.log(make_album('Neha Kakar', 'Love Punjab'));
console.log(make_album('Amme Virk', 'Malay DHUN', 20));
// Q41 
console.log('Answer 41');
var magicians = ["Ali", "Umer", "Saba"];
var show_magicians = function (array) {
    array.forEach(function (elem) {
        console.log(elem);
    });
};
show_magicians(magicians);
// Q42 
console.log('Answer 42');
var make_great = function (array) {
    for (var i = 0; i < array.length; i++) {
        array[i] = "the Great ".concat(array[i]);
    }
};
//   make_great(magicians);
show_magicians(magicians); // prints "the Great Harry Houdini", "the Great David Blaine", etc.
// Q43
console.log('Answer 43');
var make_great2 = function (array) {
    var newArray = [];
    for (var i = 0; i <= array.length; i++) {
        newArray.push("The Great ".concat(array[i]));
    }
    return newArray;
};
console.log(make_great2(magicians));
show_magicians(magicians);
// Q44 
console.log('Answer 44');
var sandwich_customers = ["Ali", "Umer", "Sana"];
var sandwich_ordered = function (order_list) {
    console.log("You have ".concat(order_list.length, " new sandwich orders"));
};
sandwich_ordered(sandwich_customers);
//   Q 45
console.log('Answer 45');
var make_car = function (manufacturer, mode_name, color, optional_feature) {
    var carObj = {
        manufacturer: manufacturer,
        mode_name: mode_name,
        color: color,
        optional_feature: optional_feature
    };
    return carObj;
};
console.log(make_car('Honda', "Civic", "Black", "Auto-Lock"));
