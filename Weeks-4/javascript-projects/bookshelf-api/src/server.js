const Hapi = require('@hapi/hapi');
const { nanoid } = require('nanoid');
const books = require('./books');

const init = async () => {
  const server = Hapi.server({
    port: 9000,
    host: 'localhost',
  });

  server.route([
    {
      method: 'POST',
      path: '/books',
      handler: (request, h) => {
        const {
          name,
          year,
          author,
          summary,
          publisher,
          pageCount,
          readPage,
          reading,
        } = request.payload;

        if (name === undefined) {
          const response = h.response({
            status: 'fail',
            message: 'Gagal menambahkan buku. Mohon isi nama buku',
          });

          response.code(400);

          return response;
        }

        if (readPage > pageCount) {
          const response = h.response({
            status: 'fail',
            message: 'Gagal menambahkan buku. readPage tidak boleh lebih besar dari pageCount',
          });

          response.code(400);

          return response;
        }

        const id = nanoid();
        const insertedAt = new Date().toISOString();
        const updatedAt = new Date().toISOString();

        const book = {
          id,
          name,
          year,
          author,
          summary,
          publisher,
          pageCount,
          readPage,
          reading,
          insertedAt,
          updatedAt,
        };

        books.push(book);

        const response = h.response({
          status: 'success',
          message: 'Buku berhasil ditambahkan',
          data: {
            bookId: id,
          },
        });

        response.code(201);

        return response;
      },
    },
  ]);

  await server.start();

  console.log('Server running on %s', server.info.uri);
};

process.on('unhandledRejection', (err) => {
  console.log(err);
  process.exit(1);
});

init();
