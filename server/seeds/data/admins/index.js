/* eslint-disable max-len */
const md5 = require('md5');

module.exports = {
    login: 'логин от админки',
    password: md5('пароль от админки'),
    email: 'админская почта',
    id: 'admin_id'
};
