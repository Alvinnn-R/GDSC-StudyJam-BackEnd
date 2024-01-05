// JavaScript Series(Menggunakan NodeJS sebagai runtime JavaScript / disisi server)
console.log('Hello World');

// Deklarasi Variable
// let
// const
// var

// Function pada JS (Deklarasi Function dan Arrow Function)

// function contohFungsi (Param1, Param2) {
//     console.log(Param1+Param2);
// }

// Arrow Function
    // contohFungsi = () =>  {
    //     console.log("Arrow Function");
    // }

    // console.log(contohFungsi());

    // const contohFungsi = () => {
    //     return "Fungsi yg disimpan dlm variable"
    // }

    // console.log(contohFungsi());


const playerChoise = "gunting";

function randomChoices() {
    const choices = ["batu","kertas", "gunting"];
    const randomNumber = Math.floor(Math.random() * choices.length);
    
    return choices[randomNumber];
}

// Jika menggunakan playerChoise static (value variabel manual/bukan inputan)

// const computerChoise = randomChoices();
// console.log('Pilihan Pemain :' + playerChoise);
// console.log('Pilihan Computer :' + computerChoise);

// console.log(randomChoices());

// Array JavaScript
console.log('--------------------');
var arrayContoh = ["Array1", "Array2"]

console.log(arrayContoh); //Menampilkan seluruh array
console.log(arrayContoh[1]); //Menapilkan sesuai index
console.log(arrayContoh.length);//Menampilkan panjang atau lenght array


console.log('--------------------');
//Else If / Kondisi

// const usia = 42;

// if (usia < 20) {
//     console.log("belum cukup umur");
// } else if (usia >= 20 && usia <= 41) {
//     console.log("sudah cukup umur");
// }else if (usia >= 41) {
//     console.log("terlalu tua");
// }



const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question("Pilihan Pemain: ", (result) => {
    const playerChoise = result;
    const computerChoise = randomChoices();

    console.log("Pilihan Komputer: " + computerChoise);

    if (playerChoise == "gunting" && computerChoise == "kertas") {
        console.log("Pemain Menang");
    } else if (playerChoise == "batu" && computerChoise == "gunting") {
        console.log("Pemain Menang");
    }else if (playerChoise == "kertas" && computerChoise == "batu") {
        console.log("Pemain Menang");
    }else if (playerChoise == computerChoise) {
        console.log("Seimbang");
    } else {
        console.log("Computer Menang");
    }

    readline.close();
});
