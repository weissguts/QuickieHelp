'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('Charities', [{
            organization: 'DanielOrgTest',
            orgwebsite: 'https://www.orgtesttttt.com',
            firstname: 'DanielTest',
            lastname: 'HernandezTest',
            title: 'President',
            email: 'test@test.com',
            eventname: 'puppyrun',
            description: 'Come run with Puppies',
            eventdate: 'March 30, 2018',
            eventtime: '7:00 AM',
            userinterestdescription: 'People who are interested in cuteness.'
        }], {});
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('Charities', null, {});
    }
};
