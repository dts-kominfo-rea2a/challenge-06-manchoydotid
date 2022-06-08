// TODO: import module bila dibutuhkan di sini
const fs = require("fs");

// ! JANGAN DIMODIFIKASI
let file1 = "./data1.json";
let file2 = "./data2.json";
let file3 = "./data3.json";

// ! JANGAN DIMODIFIKASI
let modifyFile1 = (val) => {
  file1 = val;
};
let modifyFile2 = (val) => {
  file2 = val;
};
let modifyFile3 = (val) => {
  file3 = val;
};

// TODO: Kerjakan bacaData
// gunakan variabel file1, file2, dan file3
const bacaData = function (fnCallback) {
  const files = [file1, file2, file3];
  let dataJSON;
  // const hasilMessage = [];
  let hasilMessage = [];

  // files.forEach((element) => {
  for (let counter = 0; counter < files.length; counter++) {
    fs.readFile(files[counter], { encoding: "utf8" }, (err, dataYangDibaca) => {
      if (err) {
        return console.log("Ada terjadi error: " + err);
      } else {
        let arrayOfObject = JSON.parse(dataYangDibaca);
        if (arrayOfObject.message != undefined) {
          dataJSON = arrayOfObject.message;
        } else {
          if (arrayOfObject[0].message != undefined) {
            dataJSON = arrayOfObject[0].message;
          } else {
            dataJSON = arrayOfObject[0].data.message;
          }
        }
        let msg = dataJSON.split(" ");
        msg = msg[1];
        hasilMessage.push(msg);
      }
    });
  }
};
// ! JANGAN DIMODIFIKASI
module.exports = {
  modifyFile1,
  modifyFile2,
  modifyFile3,
  bacaData,
};
