// Sanash_vaqti
// let N = parseInt(prompt("N ni kiriting:"));
// let M = parseInt(prompt("M ni kiriting:"));
// let i = N;
// let sum = 0;
// do {
//     sum += 1;
//     i++
// } while(i <= M)
// sum = sum * 10;
// console.log(sum);

//Katta_kichik
// let N = prompt("Sovg'aning narxini kiriting; ")
// let A = prompt("To'ng'ichni pulini kiriting: ")
// let B = prompt("O'rtanchani pulini kiriting: ")
// let C = prompt("Kichigini pulini kiriting: ")
// N = N*1;
// A = A*1;
// B = B*1;
// C = C*1;
// let res;
// let all = A + B + C;

// if (all >= N){
//     console.log("Yes");
// } else {
//     console.log("No");
// };

// 2xonali sonni birinchi raqamini topish
// let a = prompt("2 xonali sonni kiriting");
// let = a*1;

// let result = parseInt(a / 10);
// console.log(result);

// Oxirgi Raqam
// let a = prompt("2 xonali sonni kiriting");
// let = a*1;

// let result = parseInt(a % 10);
// console.log(result);

// Diaganallar soni
// let n = parseInt(prompt("N natural sonini kiriting:"));

// if (n > 0) {
//   let diagonalSon = n * (n - 3) / 2;
//   console.log(diagonalSon);
// } else {
//   console.log("Noto'g'ri natural son kiritilgan.");
// }

// Azimjonning qo'ylari
// let a = prompt("Qo'ylarning oyoqlari sonini kiriting; ")
// let b = 2;
// let result = 0;

// if(a > 1 && a % 2 == 0) {
//     result = a / b;
// } else {
//     result = "Ma'lumotlar noto'g'ri kiritilgan"
// };

// console.log(result);

// 10 ming qadam
// let a = Math.floor(prompt("Qadamlaringiz sonini kiriting; "))  
// let b;

// if(1 < a < 10000) {
//     b = a / 100;
// }
// console.log(b);

// let a = prompt("kirit: ")
// let i = 1;

// while (i >= a){
//     i = i / a;
//     i++
//     console.log(i);
// }


// Case1
// let m = Math.floor(prompt("Birinchi sonni kiriting; "));
// switch (m) {
//     case 1:
//         console.log("Dushanba");
//         break;

//     case 2:
//         console.log("Seshanba");
//         break;
//     case 3:
//         console.log("Chorshanba");
//         break;
//     case 4:
//         console.log("Payshanba");
//         break;
//     case 5:
//         console.log("Juma");
//         break;
//     case 6:
//         console.log("Shanba");
//         break;
//     case 7:
//         console.log("Yakshanba");
//         break;
//     default:
//         console.log("Bunday hafta mavjud emas");
//         break;
// }


// Case2
// let K = Math.floor(prompt("K ni kiriting; "))
// let counter = 0;

// switch (K) {
//     case 1:
//         counter = "Yomon"
//         break;
//         case 2:
//         counter = "qoniqarsiz"
//         break;
//         case 3:
//         counter = "qoniqarli"
//         break;
//         case 4:
//         counter = "yahshi"
//         break;
//         case 5:
//         counter = "a'lo"
//         break;

//     default:
//         counter = "Xato"
//         break;
// }


// Case3
// let oy = Math.floor(prompt("Oyni raqamini kiriting; "))
// let result = 0;

// switch (oy) {
//     case 1:
//     case 2:
//     case 12:
//         result = "Qish fasli"
//         break;
//     case 3:
//     case 4:
//     case 5:
//         result = "Bahor fasli"
//         break;
//     case 6:
//     case 7:
//     case 8:
//         result = "Yoz fasli"
//         break;
//     case 9:
//     case 10:
//     case 11:
//         result = "Kuz fasli"
//         break;

//     default:
//         result = "Xato fasli"
//         break;
// }
// console.log(result);

// Case4
// let oy = Math.floor(prompt("Oyni raqamini kiriting; "))
// let result = 0;

// switch (oy) {
//     case 4:
//     case 6:
//     case 9:
//     case 11:
//         result = '30 kun bor'
//         break;
//     case 1:
//     case 3:
//     case 5:
//     case 7:
//     case 8:
//     case 10:
//     case 12:
//         result = '31 kun bor'
//         break;
//     case 2:
//         result = '28 kun bor'
//         break
//     default:
//         result = 'xato oy kiritilgan'
//         break;
// }
// console.log(result);

//case5

// let A = parseFloat(prompt("A ni kiriting: "));
// let B = parseFloat(prompt("B ni kiriting: "));

// let counter = parseInt(prompt("Arifmetik amalni tanlang:"));
// let res = 0;

// switch (counter) {
//     case 1:
//         res = A + B;
//         break;
//     case 2:
//         res = A - B;
//         break;
//     case 3:
//         res = A / B;
//         break;
//     case 4:
//         res = A * B;
//         break;
//     default:
//         res = 'Xato';
//         break;
// }

// console.log("Natija: " + res);

// case6
// let d = parseFloat(prompt("Qiymatni kiriting: "));
// let res = 0;

// let m = parseInt(prompt("O'lchov birligini tanlang: 1.detsimetr 2.kilometr 3.metr 4.millimetr 5.santimetr"));

// switch (m) {
//     case 1:
//         res = d / 10;
//         break;
//     case 2:
//         res = d * 1000;
//         break;
//     case 3:
//         res = d;
//         break;
//     case 4:
//         res = d / 1000;
//         break;
//     case 5:
//         res = d / 100;
//         break;
//     default:
//         res = 'Xatolik';
//         break;
// }

// console.log(res);

// case7
// let d = parseFloat(prompt("Qiymatni kiriting: "));
// let res = 0;

// let m = parseInt(prompt("O'lchov birligini tanlang: 1.kilogram 2.miligram 3.gramm 4.tonna 5.sentner"));

// switch (m) {
//     case 1:
//         res = d;
//         break;
//     case 2:
//         res = d / 1000000;
//         break;
//     case 3:
//         res = d / 1000;
//         break;
//     case 4:
//         res = d * 1000;
//         break;
//     case 5:
//         res = d * 100;
//         break;
//     default:
//         res = 'Xatolik';
//         break;
// }

// console.log(res);

// case7
