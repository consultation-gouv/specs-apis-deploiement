'use strict';

const path = require('path');
const mockApi = require('swagger-mock-api');

const request = {
    method: 'get',
    url: '/instances'
};

const response = {
    setHeader: () => {},
    write: console.log.bind(console)
};

const next = () => {};

let api = mockApi({swaggerFile: path.join(__dirname, './provider.swagger.yml')});
api(request, response, next);
