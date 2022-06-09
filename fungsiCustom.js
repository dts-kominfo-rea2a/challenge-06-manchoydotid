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
  let hasilAkhir = [];
  let error = null;

  fs.readFile(file1, { encoding: "utf8" }, (err, dataYangDibaca) => {
    if (err) {
      return err;
    }
    let arrayOfObject = JSON.parse(dataYangDibaca);
    let messageWord = arrayOfObject.message.split(" ");
    let data1 = messageWord[1];
    hasilAkhir.push(data1);

    fs.readFile(file2, { encoding: "utf8" }, (err, dataYangDibaca) => {
      if (err) {
        return err;
      }
      let arrayOfObject = JSON.parse(dataYangDibaca);
      let messageWord = arrayOfObject[0].message.split(" ");
      let data2 = messageWord[1];
      hasilAkhir.push(data2);

      fs.readFile(file3, { encoding: "utf8" }, (err, dataYangDibaca) => {
        if (err) {
          return err;
        }
        let arrayOfObject = JSON.parse(dataYangDibaca);
        let messageWord = arrayOfObject[0].data.message.split(" ");
        let data3 = messageWord[1];
        hasilAkhir.push(data3);
        console.log(hasilAkhir);

        return fnCallback(error, hasilAkhir);
      });
    });
  });
};
// ! JANGAN DIMODIFIKASI
module.exports = {
  modifyFile1,
  modifyFile2,
  modifyFile3,
  bacaData,
};
