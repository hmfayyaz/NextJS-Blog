// // write a function to validate document from the given library.

// // Decsription:
// // you need to write a function which takes two arguments.
// // first string will be library and second will be document,
// // then your function should validate if all the characters in document also present in library.
// // otherwise function will return false.

// // e.g: doc="Hello world" lib="abc....z" -> true
// // e.g2: doc="Hello world!" lib="abc....z" -> false

// const validate = (lib, doc) => {
//   let libArr = lib.split("");
//   let docArr = doc.split("");

//   for (let i = 0; i <= libArr.length; i++) {
//     if (docArr.indexOf(libArr[i]) === -1) {
//       return false;
//     }
//   }

//   return true;
// };

// // const validate = (lib, doc) => {
// //   let libArr = lib.split("");
// //   let docArr = doc.split("");

// //   for (let i = 0; i <= libArr.length; i++) {
// //     if (docArr[i] !== libArr[i]) {
// //       return false;
// //     }
// //   }

//   return true;
// };

// // run with lib length
// // check all docchar with libcharacter
// // if exist all word return true
// // else false

// validate("helloworld", "abcdefghijklmnopqrstuvwxyz");
