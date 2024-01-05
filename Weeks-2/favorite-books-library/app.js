// expression = Kode yang memiliki sebuah nilai
// statement


// Object yang didalamnya terdapat property
// const book = {
//     name: "Siksa Kubur",
//     interest: "Horor dan Drama",
//     added: "17/12/2023"
// };

// Arrow Function (Perbedaan dengan regular function adalah fungsi arrow harus dipanggil sesudah/dibawah fungsi sedangkan regular dapat dipanggil sebelum/diatas fungsi )
// const print = (book) => {
//     console.log(`Nama buku: ${book.name}`);
//     console.log(`Ketertarikan: ${book.interest}`);
//     console.log(`Ditambahkan pada: ${book.added}`);
// };

// print(book);

// Menggunakan dan Install package prompt-sync
const prompt = require("prompt-sync")();
const dayjs = require("dayjs");
const fs = require("fs")


// const name = prompt('Siapakah Namamu? ');

// console.log(name);

// kalau kita pakai const object tidak bisa berubah solusinya pakai let, akan tetapi properti dapat diubah pada const
// const book = {
//     name: "",
//     interest: "",
//     price: 0,
//     added: ""
// };

// book.name = prompt("Masukan Judul Buku: ");
// book.interest = prompt("Masukan Keterkaitan: ");
// book.price = prompt("Masukan Harga Buku: ");
// book.added = dayjs().format('dddd, MM/DD/YYYY hh:mm A');

// console.log('----------------------------------------');
// console.log(`Judul: ${book.name}`);
// console.log(`Keterkaitan: ${book.interest}`);
// console.log(`Harga: ${book.price}`);
// console.log(`Tanggal: ${book.added}`);


// tanggal di js

// const date = new Date().getDay();
// const month = new Date().getMonth() + 1;
// const year = new Date().getFullYear();

// console.log(`${date}/${month}/${year}`);


// Menggunakan/Install Package DayJS
// const dayjs = require("dayjs");

// const date = dayjs().format('dddd, MM/DD/YYYY hh:mm A');

// console.log(date);


// Penerapan Loop dan pilihan buku
let books = [];

const addBook =  () => {
    console.clear();

    const tittle = prompt("Insert book tittle: ");
    const interest = prompt("Insert your interest: ");
    const price = prompt("Insert the price: ");
    const added = dayjs().format('dddd, MM/DD/YYYY hh:mm A');

    books.push({
        tittle,
        interest,
        price,
        added,
    });
}

const showBook = () => {
    console.clear();

    for(const book of books){
        console.log(`${book.tittle} (${book.interest})`);
        console.log(`Rp.${book.price}`);
        console.log(book.added + "\n");
    }

    prompt("Press Enter to Continue....");
};

const saveBook = () => {
    fs.writeFileSync("favorite.json", JSON.stringify(books));
}

const getBooks = () => {
    const data = fs.readFileSync("favorite.json");
    const books = JSON.parse(data);
    
    return books;
}

books = getBooks();

let running = true;

while(running) {
    console.clear();
    console.log("Favotite Books Library");
    console.log("1. Show Book");
    console.log("2. Add Book");
    console.log("3. Exit");

    const choice = prompt("What do you want to do? ");

    if(choice == 1) {
        // console.log("Tampilkan Buku");
        showBook();
    } else if (choice == 2) {
        // console.log("Tambahkan Buku");
        addBook();
    } else if (choice == 3) {
        // console.log("Keluar");
        saveBook();
        running = false;
    } else {
        console.log("Menu tida ada! \n");

        prompt("Press Enter to Continue....");

    }
}