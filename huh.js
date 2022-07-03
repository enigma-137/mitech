// // // let name = prompt(`What is your name?`);
// // // let sname = name.slice(0,1);
// // // let ssname = sname.toUpperCase();
// // // // console.log(sname)
// // // let lengt = name.length;
// // // let lname = name.slice(1,lengt)
// // // lname = lname.toLowerCase();
// // // // alert(`you have written ${tweetCount} number of letters and you have ${140-tweetCount}letters left`);


// // alert(ssname + lname);
// let bName = prompt(`what is your name?`);
// let gName = prompt(`What is your crush's name?`);
// let perc = Math.random() * 101;

// let percentage = Math.floor(perc);

// if (percentage > 80){
//     alert(`Dear ${firtName()} and ${secondName()}, You have ${percentage}% chance of getting in, Lmao you should shoot your shot`)
// }

// else if (percentage  > 40 && percentage <= 80) {
//     alert(`Dear ${firtName()} and ${secondName()},  You have ${percentage}% chance of getting in, just Pray and be using style to look for someone else`)
// } else {
    
//     alert(`Dear ${firtName()} and ${secondName()}, You have ${percentage}% chance of getting in,  Just forget Comrade, she's not your kind`)
// }


// function firtName(){
// let slicedFirstLetter = bName.slice(0,1);
//  slicedFirstLetter = slicedFirstLetter.toUpperCase();
// let firstLength = bName.length;
// let slicedRest = bName.slice(1, firstLength);
// slicedRest = slicedRest.toLowerCase();
// return slicedFirstLetter + slicedRest;
// }

// function secondName(){
//     let slicedFirstLetterOfSecondName = gName.slice(0,1);
//     slicedFirstLetterOfSecondName = slicedFirstLetterOfSecondName.toUpperCase();
//     let secondLength = gName.length;
//     let slicedSecondRest = gName.slice(1, secondLength);
//     slicedSecondRest = slicedSecondRest.toLowerCase();
//     return slicedFirstLetterOfSecondName + slicedSecondRest;
//     }



//     var alertRedInput = "#8C1010";
//     var defaultInput = "rgba(10, 180, 180, 1)";
    
//     function userNameValidation(usernameInput) {
//         var username = document.getElementById("username");
//         var issueArr = [];
//         if (/[-!@#$%^&*()_+|~=`{}\[\]:";'<>?,.\/]/.test(usernameInput)) {
//             issueArr.push("No special characters!");
//         }
//         if (issueArr.length > 0) {
//             username.setCustomValidity(issueArr);
//             username.style.borderColor = alertRedInput;
//         } else {
//             username.setCustomValidity("");
//             username.style.borderColor = defaultInput;
//         }
//     }
    
//     function passwordValidation(passwordInput) {
//         var password = document.getElementById("password");
//         var issueArr = [];
//         if (!/^.{7,15}$/.test(passwordInput)) {
//             issueArr.push("Password must be between 7-15 characters.");
//         }
//         if (!/\d/.test(passwordInput)) {
//             issueArr.push("Must contain at least one number.");
//         }
//         if (!/[a-z]/.test(passwordInput)) {
//             issueArr.push("Must contain a lowercase letter.");
//         }
//         if (!/[A-Z]/.test(passwordInput)) {
//             issueArr.push("Must contain an uppercase letter.");
//         }
//         if (issueArr.length > 0) {
//             password.setCustomValidity(issueArr.join("\n"));
//             password.style.borderColor = alertRedInput;
//         } else {
//             password.setCustomValidity("");
//             password.style.borderColor = defaultInput;
//         }
//     }


// // var dog = prompt("What is your dog\'s age?")

// // var name = (dog - 2) * 4 +  21; 

// // alert(name)

// //  function getMilk(money, costPerBottle){

 
   
// //  }
// //  console.log(`buy${calBottles(money, costPerBottle)} number of bottles`);
 
// //  console.log(`you have ${changeLeft()} change left`); 

// //  function calBottles(startMoney, costPerBottle){
// //     var numberOfMilk = Math.floor(startMoney/costPerBottle);
// //     return numberOfMilk;
// //  }

// //  function changeLeft(change, costPerBottle){
// //     var changes =  change % costPerBottle;
// //     return changes;
// //  }

// //  getMilk(4, 4);
// // function bmiCalculator(weight, height){
// //     var bmi = weight / Math.pow(height,2);
// //     return Math.round(bmi);
// // }
// // var john = bmiCalculator(65, 1.8);

// // alert(john);
