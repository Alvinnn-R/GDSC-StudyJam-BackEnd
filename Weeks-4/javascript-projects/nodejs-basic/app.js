const coffee = require('./index');
 
console.log(coffee);
 
/**
 * node app.js
 *
 * output:
 * { name: 'Tubruk', price: 15000 }
 */

// Perhatikan nilai parameter yang diberikan pada require(). Nilai parameter-nya merupakan lokasi dari module target impor. Ingat! Jika Anda hendak mengimpor modul lokal (local module), selalu gunakan tanda ./ di awal alamatnya ya.

// Bila berkas coffee.js diletakkan di folder yang berbeda dengan app.js, misalnya memiliki struktur seperti ini:

// root folder:.
// ├── app.js
// ├── package.json
// └── lib
//     └── coffee.js

// Kita perlu mengimpornya dengan alamat:

// app.js
// const coffee = require('./lib/coffee');

// Anda juga bisa menggunakan tanda ../ untuk keluar satu level dari folder terkini. Ini berguna bila ingin mengimpor module yang berbeda hierarki seperti ini:

// app.js
// const coffee = require('../lib/coffee');




/**
* Gunakan object destructuring untuk mengimpor lebih dari satu nilai pada modul.
*/
const { firstName, lastName } = require('./index');
 
 
console.log(firstName);
console.log(lastName);
 
 
/**
* output:
* Harry
* Potter
**/