const {
  // eslint-disable-next-line max-len
  addBook,
} = require('./handler');

const routes = [
  {
    method: 'POST',
    path: '/books',
    handler: addBook,
  },
  // {
  //   method: 'GET',
  //   path: '/books',
  //   handler: () => {},
  // },
];

module.exports = routes;
