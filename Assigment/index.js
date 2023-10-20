"use strict";
// Question2
// Personal Message: Store a person’s name in a variable, and print a message to that person. Your message should be simple, such as,
//  “Hello Eric, would you like to learn some Python today?”
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
// import ts from "typescript"
// // ANSWER
// let userName= ("Ali")
// console.log("Hi,my name is Muhammad Ayan and today i will teach you Typescript")
// Question3
// Name Cases: Store a person’s name in a variable,
//  and then print that person’s name in lowercase, uppercase, and titlecase.
// ANSWER
// let userName = "Rayyan"
// let uppercase = userName.toUpperCase();
// let lowercase = userName.toLowerCase();
// console.log(uppercase)
// Question4
// Famous Quote: Find a quote from a famous person you admire. Print the quote and the name of its author.
//  Your output should look something like the following, including the quotation marks:
// ANSWER
// let famousPerson = "William Wallace"
// let qoute = ("Every man dies, but not every man really lives")
// console.log(`${famousPerson}Once said, ${qoute}`)
// Question5
// Famous Quote 2: Repeat Exercise 4, but this time store the famous person’s name in a variable called famous_person
//  Then compose your message and store it in a new variable called message. Print your message.
// ANSWER 
// let famous_person = "Sir Zia Khan"
// let myMessage = "I admire you alot cause you have given me lessons for life, and you are my favorite teacher"
// console.log(`My message to ${famous_person} : ${myMessage}`)
// Question6
// Stripping Names: Store a person’s name, and include some whitespace
//  characters at the beginning and end of the name. Make sure you use each  
//  combination, "\t" and "\n", at least once. Print the name once, so the whitespcharacterace around the name is displayed.
//  Then print the name after striping the white spaces.
// ANSWER
// let strippedName1: string = "Akhtar"
// let strippedName2: string = "Shariq"
// console.log(`Name Is In Next Line \n ${strippedName1} \t ${strippedName2}`)
// Question7
// Number Eight: Write addition, subtraction, multiplication, 
// and division operations that each result in the number 8. 
// Be sure to enclose your operations in print statements to see the results.
// ANSWER
// console.log(2 + 6)
// console.log(10 - 2)
// console.log(2 * 4)
// console.log(16 / 2)
// Question8
// You should create four lines that look like this:
// console.log(5 + 3)
// ANSWER
// console.log(5 + 3)
// console.log(5 + 3)
// console.log(5 + 3)
// console.log(5 + 3)
// Question9
// Favorite Number: Store your favorite number in a variable. Then,
//  using that variable, create a message that reveals your favorite number.
// Print that message.
// ANSWER
// let favoriteNumber = 734274
// let message = ("My favorite number")
// console.log(`${message} Is ${favoriteNumber}`)
// Question10
// Adding Comments: Choose two of the programs you’ve written, 
// and add at least one comment to each. If you don’t have anything specific to write because your programs are too simple at this point,
//  just add your name and the current date at the top of each program file. Then write one sentence describing what the program does.
// ANSWER
// In this program I am telling you about how i am going to teach you typescript
// let message = ("Hi,my name is Muhammad Ayan and today I am going to teach you typescript")
// console.log(message)
// Question11
// Names: Store the names of a few of your friends in a array called names.
//  Print each person’s name by accessing each element in the list, one at a time.
// ANSWER
// let names = ["Hisham","Faisal","Ali"]
// console.log(names[2])
// Question12
// Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name,
//  print a message to them. The text of each message should be the same, but each message should be personalized with the person’s name.
// ANSWER
// let names = ["Hisham","Faisal","Ali"]
// let message = ("Hi My Beloved Friend,Would You Like To Learn Some Typescript Today? ")
// console.log(names + message)
// Question13
// Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples.
//  Use your list to print a series of statements about these items, such as “I would like to own a Honda motorcycle.”
// ANSWER
// let vehicle = ["Nissan-GTR","Private-Jet","Kawasaki-Ninja","Train"]
// console.log(`I would like to go to Maldives in my ${vehicle[1]}`)
// console.log(`I would like to go to Lahore in my ${vehicle[3]}`)
// console.log(`I would like to go to my Friends House in my ${vehicle[0]}`)
// console.log(`I would like to go to School in my ${vehicle[2]}`)
// Question14
// Guest List: If you could invite anyone, living or deceased, to dinner,
//  who would you invite? Make a list that includes at least three people you’d like to invite to dinner. 
// Then use your list to print a message to each person, inviting them to dinner.
// ANSWER
// let people = ["Rayaan","Huzaifa","Ali"]
// for(let friends of people){
//     console.log(`Hello ${friends}"I Hope You Are Doing fine,I Am Inviing You To My House,I Hope You Will Arrive Tomorrow"`)
// }
// Question15
// Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. 
// You’ll have to think of someone else to invite
// ANSWER
// let guest =["Rayyan","Huzaifa","Ali","Shaheer","Fatima"]
// console.log(` \n ${guest[2]}: I will not be able to come \n`)
// guest.splice(2,1)
// guest.push("Hamzah Ali")
// for(let friends of guest){
//         console.log(`Hello ${friends}"I Hope You Are Doing fine,I Am Inviing You To My House for Dinner,I Hope You Will Arrive Tomorrow"`)
//     }
// Question16
// More Guests: You just found a bigger dinner table, so now more space is available. 
// Think of three more guests to invite to dinner.
// ANSWER
// let guest =["Rayyan","Huzaifa","Ali","Shaheer","Fatima"]
// console.log(` \n ${guest[2]}: I will not be able to come \n`)
// guest.splice(2,1)
// guest.push("Hamzah Ali")
// guest.push("Ahmed")
// guest.unshift("Umer")
// for(let friends of guest){
//             console.log(`Hello ${friends}"I Hope You Are Doing fine,I Am Inviing You To My House for Dinner,I Hope You Will Arrive Tomorrow"`)
//         }
// Question17
//Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner,
// and you have space for only two guests.
// // ANswer
// let guest =["Rayyan","Huzaifa","Ali","Shaheer","Fatima"]
// console.log("Due to Limited space,We are inviting only few members")
// while(guest.length >2 ){
//     let uninviteFriends = guest.pop()
//     console.log(`Sorry ${uninviteFriends},I have to uninvite you`)
// }
// for(let invitedfriends of guest){
//     console.log(`You ${invitedfriends} are still invited`)
// }
// guest.pop()
// guest.pop()
// console.log(guest)
// Question18
// Seeing the World: Think of at least five places in the world you’d like to visit.
// ANSWER
// let locations = ["Honk-Kong","Maldives","Dehli","Lahore"]
// let alphabeticalOrder = ["Dehli","Hong-Kong","Lahore","Maldives"]
// let origionalOrder = ["Hong-Kong","Maldives","Dehli","Lahore"]
// let reverseAlphabeticalOrder = ["Maldives","Lahore","Hong-Kong","Dehli"]
// console.log(reverseAlphabeticalOrder)
// Question19
// Dinner Guests: Working with one of the programs from Exercises 14 through 18,
//  print a message indicating the number of people you are inviting to dinner.
// ANSWER
// let people = ["Rayaan","Huzaifa","Ali",]
// console.log(people)
// NOT DONE
// Question20
// Think of something you could store in a array. For example,
//  you could make a list of mountains, rivers, countries, cities, languages, 
//  or anything else you’d like. Write a program that creates a list containing these items.
// ANSWER
// let something = ["Mount-Pico da Neblina","Amazon-River","Brazil","São Luís","Portuguese"]
// console.log(something)
// Question21
// They think of something you could store in a TypeScript Object. 
// Write a program that creates Objects containing these items.
// ANSWER
// interface information {
// email:string
// password:number
// userID:string
// userName:string
// }
// let myInfo :information = {
// email:"Ayandanish2008@gmail.com",
// password:123,
// userID:"777",
// userName:"Ayaan"
// }
// console.log(myInfo)
// Question22
// Intentional Error: If you haven’t received an array index error in one of your programs yet,
//  try to make one happen. Change an index in one of your programs to produce an index error.
//  Make sure you correct the error before closing the program.
// ANSWER
// let friendList = ["Ayaan","Rayan","Huzaifa"]
// let friendList = ["Ayaan","Rayan","Huzaifa"]
// console.log(friendList)
// Question23
// Conditional Tests: Write a series of conditional tests. 
// Print a statement describing each test and your prediction for the results of each test. 
// Your code should look something like this:
// let car = 'subaru';
// console.log("Is car == 'subaru'? I predict True.")
// console.log(car == 'subaru')
// ANSWER
// let  bike = `Kawasaki-Ninja`
// console.log("Is bike == 'Kawasaki-Ninja'? I predict True.")
// console.log(bike == 'Kawasaki-Ninja')
// let car = `Honda-City`
// console.log("Is car == 'Honda-City'? I predict True.")
// console.log(car == 'Honda-City')
// let personalJet = `Honda HA-420 HondaJet`
// console.log("Is personalJet  == 'Honda HA-420 HondaJet'? I predict True.")
// console.log(personalJet == 'Honda HA-420 HondaJet')
// let superCar = `McLaren F1`
// console.log("Is McLaren F1  == 'McLaren F1'? I predict True.")
// console.log(superCar == 'McLaren F1')
// let footballer = `Cristiano Ronaldo`
// console.log("Is Cristiano Ronaldo  =='McLaren F1'? I predict True.")
// console.log(footballer == 'Cristiano Ronaldo')
// let car = `Kawasaki-Ninja`
// console.log("Is Kawasaki-Ninja  == 'Kawasaki-Nina'? I predict false.")
// console.log(car  == 'Kawasaki-Ninja')
// let bike = `Honda-City`
// console.log("Is Honda-City  == 'Honda-Cit'? I predict false.")
// console.log(bike  == 'Honda-City')
// let superCar = `Kawasaki-Ninja Zx10r`
// console.log("Is Kawasak-Ninja Zx10r  == 'Kawasaki-Ninja Zx10r'? I predict false.")
// console.log(superCar  == 'Kawasaki-Ninja Zx10r')
// let personalJet = `Cristiano Ronaldo`
// console.log("Is Cris Ronaldo == 'Cristiano Ronaldo'? I predict false.")
// console.log(personalJet  == 'Cristiano Ronaldo')
// let footballer = `Honda HA-42 HondaJet`
// console.log("Is Honda HA-420 HondaJet == 'Honda HA-420 HondaJet'? I predict false.")
// console.log(footballer  == 'Honda HA-420 HondaJet')
// Question24
// More Conditional Tests: You don’t have to limit the number of tests you create to 10. 
// If you want to try more comparisons, write more tests. 
// Have at least one True and one False result for each of the following:
// ANSWer
// let num2 = 2
// console.log(num2 == 3)
// let string2 = `2`
// console.log(string2 == `2`)
// let one = 1
// console.log(one ! = 1)
// let anotherOne = `1`
// console.log(anotherOne === `1`)
// let word = "OMER"
// let newWord = word.toLowerCase()
// console.log(newWord === "omer")
// console.log(11<12)
// console.log(11>12)
// console.log(11>=12)
// console.log(11<=12)
// let firstPerson = `omerShafiq`
// let secondPerson = `Ayaaan` 
// if (firstPerson[0] && secondPerson[0] === `o`){
//     console.log("Both omer starts from `O`")
// }
// if(firstPerson[0] || secondPerson[0] == `o`){
//     console.log("Atleast one starts with `O`")
// }
// // if(firstPerson.length > secondPerson.length){
// //     console.log(`${firstPerson} name is bigger`)
// // }else {
// //     console.log(`${secondPerson} name is bigger`)
// // }
// Question25
// Alien Colors #1: Imagine an alien was just shot down in a game. 
// Create a variable called alien_color and assign it a value of 'green', 'yellow', or 'red'.
// ANSWER
// let Alien = "Green"
// if ( Alien == "Green"){
//     console.log("You Have Earned 5 Extra Points")
// }
// let anotherAlien = "yellow"
// if (anotherAlien == "yellow"){
//     console.log("You Have Earned Another Round OF Extra Points")
// }
// Question26
// Alien Colors #2: Choose a color for an alien as you did in Exercise 25,
//  and write an if-else chain
// ANSWER
// let Alien: string = "Green"
// if ( Alien === "Green"){
//     console.log("You Have Earned 5 Points")
// }
// else if (Alien === "Red"){
//     console.log("You Have Earned 10 Points")
// }
// else if (Alien === "Yellow"){
//     console.log("YOu Have Won Extra 15 Points")
// }
// else(console.log("Enter A String Value"))
// QUEstion27
// Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.
// ANSWER
// let Alien1:string = "Green"
// if ( Alien1 === "Green"){
//         console.log("You Have Earned 5 Points")
//     }
// else if (Alien1 === "Red"){
//     console.log("You have Earned 10 Points")
// }
// else if (Alien1 === "Yellow"){
//     console.log("You have Earned 15 Points")
// }
// let Alien2:string = "Red"
// if ( Alien2 === "Red"){
//     console.log("You Have Earned 5 Points")
// }
// else if (Alien2 === "Green"){
// console.log("You have Earned 10 Points")
// }
// else if (Alien2 === "Yellow"){
// console.log("You have Earned 15 Points")
// }
// let Alien3 :string = "Yellow"
// if ( Alien3 === "Yellow"){
//     console.log("You Have Earned 5 Points")
// }
// else if (Alien3 === "Red"){
// console.log("YOu have Earned 10 Points")
// }
// else if (Alien3 === "Green"){
// console.log("You have Earned 15 Points")
// }
// Question28
//Stages of Life: Write an if-else chain that determines a person’s stage of life. 
// ANSWER
// let age:number = 2
// if (age <= 2){
//     console.log("The Person Is A Baby")
// }
// else if (age => 2 && age <= 4){
//     console.log("The Person Is A Toddler")
// }
// else if (age => 4 && age <= 13){
//     console.log("The Person Is A Kid")
// }
// else if (age => 13 && age <= 20){
//     console.log("The Person Is A Teenager")
// }
// else if (age => 20 && age <= 65){
//     console.log("The Person Is A Adult")
// }
// else if (age => 65){
//     console.log("The Person Is A Elder")
// }
// Question29
// Favorite Fruit: Make a array of your favorite fruits,
//  and then write a series of independent if statements that check for certain fruits in your array.
// ANSWER
// let favoriteFruits:string[] = ["Strawberry","Mango","Grapes"]
// for (let fruits of favoriteFruits){
// if (fruits == "Strawberry"){
//     console.log("You Really Like Strawberries 😄")
// }
// if (fruits == "Mango"){
//     console.log("You Really Love Mangoes 😍")
// }
// if (fruits == "Grapes"){
//     console.log("You Dislike to eat alo of GRapes🙄")
// }
// }
// Question30
// Hello Admin: Make a array of five or more usernames, including the name 'admin'. 
// Imagine you are writing code that will print a greeting to each user after they log in to a website. 
// Loop through the array, and print a greeting to each user:
// ANSWER
// let userNames = ["Admin","Ali","Ayaan","Rayyan","Shaheer","huzaifa"]
// for (let user of userNames){
//     if (user == "Admin"){
//         console.log("Hello admin, would you like to see a status report?")
//     }
//     else if (user != "Admin"){
//         console.log(`Hello ${user},I Hope You Are Doing Well`)
//     }
// }
// Question31
// No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
// ANSWER
// let users = ["Ayaan","Rayaan","Shayaan"]
// if (users.length = 0){
//     console.log("We Need To FInd  SOme Users")
// }
// else (
//     console.log("We Have Enough Users")
// )
// for(let user of users){
// if(users.length != 0)
// users.pop()
// users.pop()
// }
// console.log(users)
// console.log("WE have an empty array")
// Question32
// Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.
// ANSWER
// let currentUsers = ["Ayaan","Huzaifa","Fatima","Rayyan","Shaheer"]
// let newUsers = ["Ayaan","Huzaifa","ALi","Zeeshan","Omer"]
// for(let newUser of newUsers){
// let userNameTaken : boolean = false
//     for (let currentUser of currentUsers){
//         if(newUser.toLowerCase() === currentUser.toLowerCase()){
//             userNameTaken = true
//             break
//         }}
//     if(userNameTaken == true){
//         console.log(`${newUser} is taken`)
//     }
//     else{
//         console.log(`${newUser} is available`)
//     }
// }
// QUestion33
// Ordinal Numbers: Ordinal numbers indicate their position in a array, such as 1st or 2nd.
// Most ordinal numbers end in th, except 1, 2, and 3.
// ANSWER
// let ordinalNumber :number[] = [1,2,3,4,5,6,7,8,9]
// for(let num of ordinalNumber ){
//     if (num == 1){
//         console.log(`1st`)
//     }
//     if (num == 2){
//         console.log(`2nd`)
//     }
//     if (num == 3){
//         console.log(`3rd`)
//     }
//     if (num == 4){
//         console.log(`4th`)
//     }
//     if (num == 5){
//         console.log(`5th`)
//     }
//     if (num == 6){
//         console.log(`6th`)
//     }
//     if (num == 7){
//         console.log(`7th`)
//     }
//     if (num == 8){
//         console.log(`8th`)
//     }
//     if (num == 9){
//         console.log(`9th`)
//     }
// }
// Question34
// Pizzas: Think of at least three kinds of your favorite pizza. Store these pizza names in a array,
//  and then use a for loop to print the name of each pizza.
// ANSWER
// let favoritePizza = ["Cheese Burst Pizza","Creamy Tikka PIzza","Arabian Pizza"]
// favoritePizza.forEach(pizza =>{
//     console.log(`I Love ${pizza} so much`)
// });
// Question35
// Animals: Think of at least three different animals that have a common characteristic. 
// Store the names of these animals in a list, and then use a for loop to print out the name of each animal.
//  • Modify your program to print a statement about each animal, such as A dog would make a great pet.
//   • Add a line at the end of your program stating what these animals have in common.
//  You could print a sentence such as Any of these animals would make a great pet!
// ANSWWER
// let commonAnimal :string [] = ["cat","dog","rabbit"]
// let commonCharacteristics :string [] = ["nails","ears","nose","teeth"]
// for(let animal of commonAnimal){
//     console.log(`A ${animal} would be a great pet`)
// }
// console.log(`They all have the same ${commonCharacteristics[0]},${commonCharacteristics[1]} and ${commonCharacteristics[2]}`)
// Question36
// T-Shirt: Write a function called make_shirt() that accepts a size and the text of a message that should be printed on the shirt.
//  The function should print a sentence summarizing the size of the shirt and the message printed on it. Call the function.
// function shirtSize (text:string , size:number){
//     console.log(`${text} - ${size}`)
// }
// shirtSize("Ayaan",7)
// shirtSize("Rayaan", 11)
// // Question37
// Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript.
//  Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.
// ANSWER
// function shirtSize (text:string = "I Love Typescript", size: string = "XL" , size2 :string = "M", size3 : string = "XXL"){
//         console.log(`${text} - ${size} - ${size2} - ${size3}`)
//     }
//     shirtSize()
// Question38
// Cities: Write a function called describe_city() that accepts the name of a city and its country.
//  The function should print a simple sentence, such as Karachi is in Pakistan. Give the parameter for the country a default value. 
//  Call your function for three different cities, at least one of which is not in the default country.
// function describeCity(city:string = "Karachi", country:string = "Pakistan"){
//       console.log(`${city} Is In ${country}`)
// }
// describeCity()
// Question39
// City Names: Write a function called city_country() that takes in the name of a city and its country. The function should return a string formatted like this:
// "Lahore, Pakistan"
// ANSWER
// function city_country(city:string = "Karachi", country:string = "Pakistan"){
//      console.log(`${city} , ${country}`)
// }
//      city_country()
// Question40
// Album: Write a function called make_album() that builds a Object describing a music album. 
// The function should take in an artist name and an album title,
//  and it should return a Object containing these two pieces of information. 
//  Use the function to make three dictionaries representing different albums. 
//  Print each return value to show that Objects are storing the album information correctly. 
//  Add an optional parameter to make_album() that allows you to store the number of tracks on an album.
//   If the calling line includes a value for the number of tracks, add that value to the album’s Object.
//    Make at least one new function call that includes the number of tracks on an album.
// Question41
// Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), 
// which prints the name of each magician in the array.
// ANSWER
// let Magicians = ["Harry Houdini","David Copperfield","Dynamo"]
// function show_Magicians ( ){
//     for(let magician  of Magicians)
//        console.log(magician)
// }
// show_Magicians()
// Question42
// Great Magicians: Start with a copy of your program from Exercise 39.
//  Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name.
//   Call show_magicians() to see that the list has actually been modified.
//ASnWER
//  let Magicianscopy = ["Harry Houdini","David Copperfield","Dynamo"]
// function  make_great () {
//     for(let magicians = 0; magicians < Magicianscopy.length; magicians++ ){
//         Magicianscopy[magicians] = "The Great" + Magicianscopy[magicians]
//     }
//     for(let magician  of Magicianscopy)
//            console.log(magician)
//     }
//     make_great()
// Question43
// Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. The function should have one parameter that collects as many items as the function call provides, and it should print a summary of the sandwich that is being ordered. Call the function three times, using a different number of arguments each time.
// let makesandwich = (sandwich:string[])=>{
//     return console.log(`Items customers want in their sandwiches are ${sandwich}`)
// }
// makesandwich(["Grilled cheese"])
// makesandwich(["Chicken Sandwich"])
//Question44
// Cars: Write a function that stores information about a car in a Object. The function should always receive a manufacturer and a model name. It should then accept an arbitrary number of keyword arguments. Call the function with the required information and two other name-value pairs, such as a color or an optional feature. Print the Object that’s returned to make sure all the information was stored correctly.
// ANSWER
// interface info {
//  manufacturer:string
//  modelName:string
//  numberPlate?:number |string 
//  color?:string
// }
// let carDetails = (manufacturer:string,modelName:string,numberPlate?:number |string,color?:string)=>{
// let showDetails:info = {
//     manufacturer,modelName
// }
// if(numberPlate!==undefined){
//     showDetails.numberPlate =numberPlate
// }
// if(color!==undefined){
//     showDetails.color =color
//     return showDetails
// }
// }
// let carDetails1 = carDetails("Toyota","corola",3724,`Cyan`)
// let carDetails2 = carDetails("Lamborghini Miura","Lamborghini",3724,`Cyan`)
// let carDetails3 = carDetails("McLaren F1","corola",3724,`Cyan`)
// console.log(carDetails1)
// console.log(carDetails2)
// console.log(carDetails3)
// Question45
// Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.
//AnsWER
function show_Magicians(magicians) {
    magicians.forEach(function (magician) {
        console.log(magician);
    });
}
function make_great(magicians) {
    var greatMagicians = [];
    for (var i = 0; i < magicians.length; i++) {
        greatMagicians.push("The GReat" + magicians[i]);
    }
    return greatMagicians;
}
// For Example
var magicianNames = ["Harry Houdini", "David Cooperfield"];
var greatMagicianNames = make_great(__spreadArray([], magicianNames, true));
show_Magicians(magicianNames);
show_Magicians(greatMagicianNames);
