// Node.js REPL
// Node.js memiliki fitur REPL atau Read-Eval-Print Loop. Sesuai namanya, fitur ini berfungsi untuk membaca kode JavaScript, mengevaluasi kode tersebut, kemudian mencetak hasil evaluasinya ke console. Nah, untuk loop, berarti proses tersebut selalu berulang.

// Cukup asik 'kan fitur REPL? Mungkin Anda akan berpikir, "Tapi kok terkesan hanya dapat mengeksekusi kode satu baris saja ya?" 
// Bila Anda beranggapan seperti itu, sebenarnya tidak tepat ya. Pasalnya, di dalam REPL terdapat mode editor yang berfungsi untuk menuliskan kode JavaScript lebih dari satu baris. Untuk menggunakan mode editor, Anda bisa tuliskan perintah .editor.

//Nilai variabel yang Anda buat di REPL dapat diakses selama Anda masih berada di dalam REPL. Jika Anda menutup Terminal atau keluar dari REPL menggunakan perintah .exit, variabel yang sudah Anda buat sebelumnya tidak bisa diakses kembali. Itu artinya, REPL hanya menyimpan memory ketika session masih berlangsung.

const message = (name) => {
    console.log(`Hello ${name}`);
 }
  
 message('JavaScript');

// Node.js Global Object
// JavaScript hanyalah bahasa pemrograman. Ia tidak mengetahui apakah Anda menjalankannya menggunakan browser atau Node.js. Di browser, JavaScript dapat mengontrol fungsionalitas browser seperti mengunjungi halaman, memuat ulang, menutup tabs, serta menampilkan alert dialog. JavaScript mampu melakukan itu karena browser menambahkan objek window pada JavaScript.

// Object.getOwnPropertyNames(global);
// console.log(Object.getOwnPropertyNames(global));

// Banyak sekali ya member dari global objek. Namun, dilansir dari website Node.js, sebenarnya mereka hanya menambahkan beberapa objek saja. Objek tersebut dinamakan dengan ‘true globals’ [2]. Berikut adalah daftarnya:

// global: Global namespace. Member apa pun yang ada di dalam object ini dapat diakses pada cakupan global.
// process: menyediakan interaksi dengan proses Node.js yang berjalan.
// console: menyediakan berbagai fungsionalitas STDIO.
// setTimeout, clearTimeout, setInterval, clearInterval: berkaitan dengan waktu.

// Ada juga objek yang merupakan ‘pseudo-globals’ atau objek global semu. Objek ini tidak terlihat bila dicetak menggunakan Object.getOwnPropertyName(global) sebab ia bukan member langsung dari objek global, melainkan diturunkan dari cakupan module. Karena pada Node.js semua berkas JavaScript adalah module [3], objek pseudo-globals dapat diakses layaknya global objek. Berikut adalah daftarnya:

// module: digunakan untuk sistem modularisasi pada Node.js.
// __filename: keyword untuk mendapatkan lokasi berkas JavaScript yang dieksekusi. Keyword ini tidak tersedia pada Node.js REPL.

// __dirname: keyword untuk mendapatkan root directory dari berkas JavaScript yang dieksekusi.
// require: digunakan untuk mengimpor module JavaScript.

// const server = new Server({
//     host: process.env.NODE_ENV !== 'production' ? 'localhost' : 'dicoding.com',
// });

const cpuInformation = process.memoryUsage();
 
console.log(cpuInformation);

// Yang terakhir dan tak kalah pentingnya adalah properti process.argv. Properti ini dapat menampung nilai baris perintah dalam bentuk array ketika menjalankan proses. Contoh, jika kita menjalankan baris perintah berikut:

// node app.js harry potter
// Maka array process.argv akan bernilai:

// Elemen pertama: Alamat (path) lengkap dari lokasi node yang menjalankan prosesnya. 
// Element kedua: Alamat (path) berkas JavaScript yang dieksekusi (app.js)
// Element ketiga: “harry”
// Element keempat: “potter”

// const firstName = process.argv[2];
// const lastName = process.argv[3];
 
// console.log(`Hello ${firstName} ${lastName}`);

const initialMemoryUsage = process.memoryUsage().heapUsed;
const yourName = process.argv[2];
const environment = process.env.NODE_ENV;

for(let i = 0; i <= 10000; i++) {
  // Proses looping ini akan membuat penggunaan memori naik
}

const currentMemoryUsage = process.memoryUsage().heapUsed;

console.log(`Hai, ${yourName}`);
console.log(`Mode environment: ${environment}`)
console.log(`Penggunaan memori dari ${initialMemoryUsage} naik ke ${currentMemoryUsage}`);

// Run CMD
// SET NODE_ENV=development && node ./index.js <Nama Anda> 



// Modularization
// Makin kompleks program yang dikembangkan, makin kompleks pula kode yang dituliskan. Jika kode aplikasi hanya ditulis dalam satu berkas saja, tentu itu akan menyulitkan kita atau developer lain untuk membaca dan memelihara aplikasi. Idealnya, satu berkas JavaScript hanya memiliki satu tanggung jawab saja. Bila lebih dari satu, itu berarti Anda perlu berkenalan dengan modularization atau modularisasi.

const coffee = {
    name: 'Tubruk',
    price: 15000,
}
 
 
module.exports = coffee;

// Setelah itu nilai coffee dapat digunakan pada berkas JavaScript lain dengan cara mengimpor nilainya melalui fungsi global require().



const firstName = 'Harry';
const lastName = 'Potter';
 
 
/* gunakan object literal
untuk mengekspor lebih dari satu nilai. */
module.exports = { firstName, lastName };



// Untuk memudahkan developer dalam proses pengembangan, Node.js menyediakan beberapa module bawaan yang dapat Anda manfaatkan guna mendukung efisiensi untuk melakukan hal-hal yang umum. Modul bawaan tersebut dikenal sebagai core modules. Anda bisa mengimpor core modules dengan fungsi yang sama, yakni require().

// Mengimpor core module http
const http = require('http'); 
// Lokasi core module dituliskan tidak seperti local module. Pasalnya, lokasi core module bersifat mutlak (disimpan di folder lib pada lokasi Node.js dipasang) sehingga kita cukup menuliskan nama module-nya saja.


// Ada 3 jenis modul pada Node.js, Anda sudah mengetahui dua di antaranya. Berikut rinciannya:

// local module: module yang dibuat secara lokal berlokasi pada proyek Node.js Anda.
// core module: module bawaan Node.js berlokasi di folder lib di mana Node.js terpasang pada komputer Anda. Core module dapat digunakan di mana saja.
// third party module: module yang dipasang melalui Node Package Manager. Bila third party module dipasang secara lokal, module tersebut akan disimpan pada folder node_modules di proyek Node.js Anda. Namun, bila dipasang secara global, ia akan disimpan pada folder node_modules di lokasi Node.js dipasang pada komputer Anda.



// Terdapat dua tipe pemasangan module melalui NPM: global dan lokal. 

// Bila dipasang secara global, module akan bersifat layaknya core module dan dapat digunakan di mana pun. 
// Bila dipasang secara lokal, module hanya dapat digunakan pada cakupan proyek Node.js saja.z

// MomentJS merupakan salah satu modul pihak ketiga yang populer untuk mengelola waktu di Node.js. Untuk memasangnya secara lokal, jalankan perintah berikut pada Terminal di proyek Node.js Anda:

// Package yang dipasang secara lokal melalui NPM akan tercatat di dalam berkas package.json, lebih tepatnya pada objek dependencies.

// npm install moment
console.log('---------------------------------');

// const moment = require('moment');
 
// const date = moment().format("MMM Do YY");
// console.log(date);

// Untuk menghapus modul pihak ketiga, Anda bisa gunakan perintah npm uninstall <package-name>. Bila Anda ingin menghapus modul moment, silakan tuliskan perintah berikut:

// npm uninstall moment


// Events
// Aplikasi Node.js biasanya dikenal memiliki pola event-driven atau memiliki alur berdasarkan suatu kejadian.

const { EventEmitter } = require('events');
 
const myEventEmitter = new EventEmitter();
 
const makeCoffee = ({ name }) => {
    console.log(`Kopi ${name} telah dibuat!`);
};
 
myEventEmitter.on('coffee-order', makeCoffee);
 
// Memicu event 'coffee-order' terjadi.
myEventEmitter.emit('coffee-order', { name: 'Tubruk' });


// Filesystem
// Ketahuilah bahwa seluruh data di komputer dikelola dan diakses melalui filesystem. Ketika kita menjalankan kode JavaScript pada browser, sangat penting untuk melimitasi JavaScript dalam mengakses filesystem. Teknik ini dinamakan dengan sandboxing. Sandboxing melindungi kita dari program jahat serta tindakan pencurian yang dapat merampas privasi penggunanya.

// Untuk mengakses berkas pada komputer, kita dapat menggunakan method fs.readFile(). Method ini menerima tiga argumen: lokasi berkas, encoding, dan callback function yang akan terpanggil bila berkas berhasil/gagal diakses.

const fs = require('fs');
 
const fileReadCallback = (error, data) => {
    if(error) {
        console.log('Gagal membaca berkas');
        return;
    }
    console.log(data);
};
 
fs.readFile('todo.txt', 'UTF-8', fileReadCallback);

// Sebagai alternatif, Anda juga bisa gunakan method versi synchronous fs.readFileSync().

const fs = require('fs');
 
const data = fs.readFileSync('todo.txt', 'UTF-8');
console.log(data);




// Readable Stream
// Pada materi sebelumnya Anda sudah mengetahui cara mengakses berkas melalui fungsi fs.readFile(). Fungsi readFile, baik versi asynchronous maupun synchronous, bekerja dengan membaca berkas hingga selesai sebelum mengembalikan data. Itu berarti, bila Anda menggunakannya untuk mengakses berkas yang besar, proses tersebut akan membutuhkan waktu lama dan memori yang besar untuk mendapatkan hasilnya. Hal ini sungguh tidak efektif!

// Kita dapat membuat readable stream dengan menggunakan method createReadStream() dari core module fs.

const fs = require('fs');
 
const readableStream = fs.createReadStream('./article.txt', {
    highWaterMark: 10
});
 
readableStream.on('readable', () => {
    try {
        process.stdout.write(`[${readableStream.read()}]`);
    } catch(error) {
        // catch the error when the chunk cannot be read.
    }
});
 
readableStream.on('end', () => {
    console.log('Done');
});
// Fungsi createReadStream() menerima dua argumen, yang pertama adalah lokasi berkas yang hendak dibaca dan yang kedua adalah objek konfigurasi. Di dalam objek konfigurasi, kita bisa menetapkan ukuran buffer melalui properti highWaterMark. Nilai default dari properti ini adalah 16384 bytes (16kb). Anda tidak perlu menetapkan properti ini bila ingin tetap memiliki nilai default. Namun, karena kita hanya menggunakan berkas teks yang ukurannya sangat kecil, maka kita buat ukuran buffer menjadi 10 bytes. Itu artinya, berkas akan dibaca setiap 10 karakter (1 karakter = 1 bytes).


// Writable Stream
// Pada materi sebelumnya kita sudah belajar bagaimana membaca berkas menggunakan teknik stream (readable stream). Namun, apakah Anda tahu bahwa teknik stream juga dapat digunakan untuk menulis berkas? Teknik ini disebut writable stream.

// Untuk membuat writable stream dalam menulis berkas, gunakanlah method createWriteStream() dari core module fs.

const fs = require('fs');
 
const writableStream = fs.createWriteStream('output.txt');