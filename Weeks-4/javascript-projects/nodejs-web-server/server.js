console.log('Halo, kita akan belajar membuat server');


// Membuat HTTP Server secara Native
// Pengembangan back-end adalah hal prioritas untuk Node.js. Ia andal dalam membangun aplikasi back-end, salah satunya web server alias sebuah komputer yang dapat menangani dan menanggapi permintaan dari client. Node.js menyediakan core modules http untuk membangun web server.
// Sesuai namanya, method ini berfungsi untuk membuat HTTP server yang merupakan instance dari http.server. Method ini menerima satu parameter custom callback yang digunakan sebagai request listener. Di dalam request listener inilah logika untuk menangani dan menanggapi sebuah request dituliskan.

// const http = require('http');
 
/**
 * Logika untuk menangani dan menanggapi request dituliskan pada fungsi ini
 * 
 * @param request: objek yang berisikan informasi terkait permintaan
 * @param response: objek yang digunakan untuk menanggapi permintaan
 */
// const requestListener = (request, response) => {
    
// };
 
// const server = http.createServer(requestListener);

// Method listen() dapat menerima 4 parameter, berikut detailnya:

// port (number): jalur yang digunakan untuk mengakses HTTP server.
// hostname (string): nama domain yang digunakan oleh HTTP server.
// backlog (number): maksimal koneksi yang dapat ditunda (pending) pada HTTP server.
// listeningListener (function): callback yang akan terpanggil ketika HTTP server sedang bekerja (listening).

// const port = 5000;
// const host = 'localhost';
 
// server.listen(port, host, () => {
//     console.log(`Server berjalan pada http://${host}:${port}`);
// });




// const http = require('http');
 
// const requestListener = (request, response) => {
//     response.setHeader('Content-Type', 'text/html');
 
//     response.statusCode = 200;
//     response.end('<h1>Halo HTTP Server!</h1>');
// };
 
 
// const server = http.createServer(requestListener);
 
// const port = 5000;
// const host = 'localhost';
 
// server.listen(port, host, () => {
//     console.log(`Server berjalan pada http://${host}:${port}`);
// });



// Method/Verb Request

// comments
// const http = require('http');
 
// const requestListener = (request, response) => {
//     response.setHeader('Content-Type', 'text/html');
//     response.statusCode = 200;
 
//     const { method } = request;
 
//     if(method === 'GET') {
//         response.end('<h1>Hello!</h1>');
//     }
 
//     // Body Request
//     if(method === 'POST') {
//         // response.end('<h1>Hai!</h1>');
//         let body = [];
    
//         request.on('data', (chunk) => {
//             body.push(chunk);
//         });
       
//         request.on('end', () => {
//             body = Buffer.concat(body).toString();
//             const {name} = JSON.parse(body)
//             response.end(`<h1>Hai, ${name}!</h1>`);
//         });
//     }
 
//     if(method === 'PUT') {
//         response.end('<h1>Bonjour!</h1>');
//     }
 
//     if(method === 'DELETE') {
//         response.end('<h1>Salam!</h1>');
//     }
// };
 
// const server = http.createServer(requestListener);
 
// const port = 5000;
// const host = 'localhost';
 
// server.listen(port, host, () => {
//     console.log(`Server berjalan pada http://${host}:${port}`);
// });
// akhir comments

// curl -X POST -H "Content-Type: application/json" http://localhost:5000 -d "{\"name\": \"Dicoding\"}"





// Routing Request
// const http = require('http');
 
// const requestListener = (request, response) => {
//     response.setHeader('Content-Type', 'text/html');
//     response.statusCode = 200;
 
//     const { method, url } = request;
 
//     if(url === '/') {
//         if(method === 'GET') {
//             response.end('<h1>Ini adalah homepage</h1>');
//         } else {
//             response.end(`<h1>Halaman tidak dapat diakses dengan ${method} request</h1>`);
//         }
//     } else if(url === '/about') {
//         if(method === 'GET') {
//             response.end('<h1>Halo! Ini adalah halaman about</h1>')
//         } else if(method === 'POST') {
//             let body = [];
    
//             request.on('data', (chunk) => {
//                 body.push(chunk);
//             });
 
//             request.on('end', () => {
//                 body = Buffer.concat(body).toString();
//                 const { name } = JSON.parse(body);
//                 response.end(`<h1>Halo, ${name}! Ini adalah halaman about</h1>`);
//             });
//         } else {
//             response.end(`<h1>Halaman tidak dapat diakses menggunakan ${method} request</h1>`);
//         }
//     } else {
//         response.end('<h1>Halaman tidak ditemukan!</h1>');
//     }
// };
 
// const server = http.createServer(requestListener);
 
// const port = 5000;
// const host = 'localhost';
 
// server.listen(port, host, () => {
//     console.log(`Server berjalan pada http://${host}:${port}`);
// });
// end comments




// Response Status

// Seperti yang sudah Anda ketahui pada modul pengenalan back-end, respons yang dibawa oleh server dibagi menjadi tiga bagian penting. 

// Status line atau bisa kita sebut response status.
// Response header.
// Response body.
// Kita bahas mulai dari response status dahulu ya. 

// Response status merupakan salah satu bagian dari respons yang berisikan tentang informasi apakah sebuah request berhasil atau gagal dilakukan. Status yang diberikan berupa kode (status code) dan pesan dari kode tersebut dalam bentuk teks (status message).

// Indikasi keberhasilan request client ditentukan oleh response status code yang dikirim oleh server. Karena itu, tentu nilai status code tak bisa sembarang kita tetapkan. Status code haruslah bernilai 3 digit angka dengan ketentuan berikut:

// 100-199: informational responses.
// 200 - 299: successful responses.
// 300-399: redirect.
// 400-499: client error.
// 500-599: server errors.


// Setelah semuanya selesai, fungsi request listener tampak seperti ini:

const http = require('http');
 
const requestListener = (request, response) => {
    // response.setHeader('Content-Type', 'text/html');

    // Respone Header
    response.setHeader('Content-Type', 'application/json');
    response.setHeader('X-Powered-By', 'NodeJS');

    response.statusCode = 200;
 
    const { method, url } = request;
 
    if(url === '/') {
        if(method === 'GET') {
            response.statusCode = 200;
            // response.end('<h1>Ini adalah homepage</h1>');

            response.end(JSON.stringify({
                message: 'Ini adalah homepage',
            }));
        } else {
            response.statusCode = 400;
            // response.end(`<h1>Halaman tidak dapat diakses dengan ${method} request</h1>`);

            response.end(JSON.stringify({
                message: `Halaman tidak dapat diakses dengan ${method} request`,
            }));
        }
    } else if(url === '/about') {
        if(method === 'GET') {
            response.statusCode = 200;
            // response.end('<h1>Halo! Ini adalah halaman about</h1>')

            response.end(JSON.stringify({
                message: 'Halo! Ini adalah halaman about',
            }));
            
        } else if(method === 'POST') {
            let body = [];
    
            request.on('data', (chunk) => {
                body.push(chunk);
            });
 
            request.on('end', () => {
                body = Buffer.concat(body).toString();
                const { name } = JSON.parse(body);
                response.statusCode = 200;
                // response.end(`<h1>Halo, ${name}! Ini adalah halaman about</h1>`);

                response.end(JSON.stringify({
                    message: `Halo, ${name}! Ini adalah halaman about`,
                }));
            });
        } else {
            response.statusCode = 400;
            // response.end(`<h1>Halaman tidak dapat diakses menggunakan ${method} request</h1>`);

            response.end(JSON.stringify({
                message: `Halaman tidak dapat diakses menggunakan ${method}, request`
            }));
        }
    } else {
        response.statusCode = 404;
        // response.end('<h1>Halaman tidak ditemukan!</h1>');

        // Respone Body
        response.end(JSON.stringify({
            message: 'Halaman tidak ditemukan!',
        }));
    }
};
 
const server = http.createServer(requestListener);
 
const port = 5000;
const host = 'localhost';
 
server.listen(port, host, () => {
    console.log(`Server berjalan pada http://${host}:${port}`);
});