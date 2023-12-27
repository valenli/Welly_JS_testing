/*
function reverseString(str) {
  // 實作你的解答        
}
console.log(reverseString("Hello")); // 預期輸出: "olleH”
*/
function reverseString(str) {
  let reversedString = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversedString += str[i];
  }
  return reversedString;
}
console.log(reverseString("Hello")); // "olleH"
