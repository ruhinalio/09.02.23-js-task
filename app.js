//1. verilenleri tersine yazdirmaq
// var a ='hello world'
// var tersine= ''
// for(var i=a.length-1; i>=0; i--){
//  tersine+=a[i]
// }
// console.log(tersine);
//==================================
//2. palondrom sozleri tapmaq
// var a = "ey babak kabab ye";
// var tersine = "";
// for (var i = 0; i < a.length; i++) {
//   tersine += a[i];
// }
// if ((tersine = a)) {
//   console.log("true");
// } else {
//   console.log("false");
// }
//=================================
//3. verilen reqemleri tersine cevirmek ama 0 olmadan
// var a = '34, 086, 470, 70, 07, 06';
// var tersine = "";
// for (var i = 0; i < a.length; i++) {
//   for (var j = 0; j < i.length; j++) {
//     var eded = a[i][j];
//     if (eded === 0) {
//       eded = "";
//     } else {
//       eded = eded;
//     }
//     tersine += eded;
//   }
//   console.log(tersine);
// }
//===============================================
//4. fizz buzz
// var a = 18;
// if (a % 3 == 0 && a % 2 == 0) {
//   console.log("fizz buzz");
// } else if (a % 2 == 0) {
//   console.log("fizz");
// } else if (a % 3 == 0) {
//   console.log("buzz");
// } else {
//   console.log("ne fizzdi nede buz");
// }
//===============================================
//5. maks karakteri gostermek
// var a = ["we", "wqeqwr", "qwrew"];
// var counter;

// for (var i = 0; i < a.length; i++) {
//   var soz = a[i];
//   for (var j = 0; j < soz.length; j++) {
//     if (counter < j) {
//       counter = soz.length;
//     }
//     console.log(soz);
//   }
// }
// 2.variant
// let str = "Hello world",
//   arr = str.toLowerCase().split(""),
//   counter = 0,
//   maxCounter = 0,
//   maxChar = "";
// for (let i = 0; i < arr.length; i++) {
//   for (let k = 0; k < arr.length; k++) {
//     if (arr[i] == arr[k]) {
//       counter++;
//     }
//   }
//   if (counter > maxCounter) {
//     maxCounter = counter;
//     maxChar = arr[i];
//   }
//   counter = 0;
// }
// console.log(`Char: ${maxChar} => Counter : ${maxCounter}`);
//======================================================
//6. saitlerin sayini cixartsin
// var a = "salam salam salam";
// var arr = a.toLocaleLowerCase().split();
// var saitler = ["a", "ı", "o", "u", "e", "ə", "i", "ö", "ü"];
// var counter = 0;
// var cemSait = 0;

// for (var i = 0; i < a.length; i++) {
//   var soz = a[i];
//   for (var j = 0; j < soz.length; j++) {
//     if (saitler.includes(soz[j])) {
//       counter++;
//       console.log(counter);
//     }
//   }
// }
//==============================================
//7. anagramin dogrulugunu yoxlamag
// var a = prompt('esas sozu daxil eidn:').toLowerCase().split()
// var b = prompt('yoxlamag istediyiniz sozu daxil edin:').toLowerCase().split()
// for (var i=0; i<a.length; i++){
//   for(var j=0; j<b.length; j++){
//     if(a[i]===b[j]){
//       console.log(` '${a}' ile '${b}' arasinda hec bir ferq YOXDUR`);
//     }
//     else{
//       console.log(`'${a}' ile '${b}' arasinda ferq VAR`);
//     }
//   }
// }
//==============================================
