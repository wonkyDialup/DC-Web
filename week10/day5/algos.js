// 1
// const string1 = "A gentleman"
// const string2 = "Elegant man"
// //expected result: true

// const string3 = "Clint Eastwood"
// const string4 = "Old West action"
// //expected result: true

// const string5 = "idontlikealgos"
// const string6 = "algoverybad"
// // expected result: false

// function checkAnagrams(str1, str2){

//     var newstr1 = str1.toLowerCase().split('').sort().join();
//     var newstr2 = str2.toLowerCase().split('').sort().join();
  
//     if(newstr1 == newstr2){
//       console.log("True");
//     }
//     else{
//       console.log("False");
//     }
  
//   }
  
// checkAnagrams(string1, string2);
// checkAnagrams(string3, string4);
// checkAnagrams(string5, string6);





// 2

phrase1 = "randy doesnt like giving algos"
phrase2 = "arent you glad its friday"
phrase3 = "i wonder whats for lunch today"


console.log(phrase1.replace(/(^\w{1})/g, m => m.toUpperCase()));
console.log(phrase2.replace(/(^\w{1})/g, m => m.toUpperCase()));
console.log(phrase3.replace(/(^\w{1})/g, m => m.toUpperCase()));







// 3


const myFunc = (arr) => {
    const sum = ((arr.length + 1) * (arr.length + 2)) / 2;
    const arrSum = (arr) => arr.reduce((a, b) => a + b, 0);
    return sum - arrSum(arr);
  };
  const myArray = [1,2,3,4,5,6,7,8,10];
  console.log(myFunc(myArray));

