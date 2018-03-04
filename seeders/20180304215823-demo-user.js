'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('Users', [{
            firstName: 'DanielTest',
            lastName: 'HernandezTest',
            email: 'test@test.com',
            password: 'abc123',
            age: '30',
            interest: 'female',
            categories: 'animals'
        }], {});
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('Users', null, {});
    }
};
