/* 
問題：重構這段程式碼並說明原因
function formatName(firstName, lastName) {
  let formattedName = '';
  if (firstName) {
    formattedName += firstName;
  }
  if (lastName) {
    formattedName += ' ' + lastName;
  }
  return formattedName;
}
*/
function formatName(firstName, lastName) {
  return `${firstName ?? ""} ${lastName ?? ""}`;
}
console.log(formatName("Valen", "Lee"));
const a = formatName("Valen", "Lee");
console.log(a);
// 運用空值合併運算子處理firstName、lastName確保在模板字串中使用時不會出現null或undefined；
// 再透過模板字符串將兩個參數組合在一起，並以空格分隔。
