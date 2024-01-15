const {
  // eslint-disable-next-line max-len
  addBook, getAllBook,
} = require('./handler');

const routes = [
  {
    method: 'POST',
    path: '/books',
    handler: addBook,
  },
  {
    method: 'GET',
    path: '/books',
    handler: getAllBook,
  },
];

module.exports = routes;
