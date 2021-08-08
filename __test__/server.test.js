'use strict';

const supertest = require('supertest');
const server=require('../server');

const requset=supertest(server.app);

//add the name of the module that im testing

describe('test API we create',()=>{
//here we can add scenario and test cases to the

it('handles not found requset try again',async()=>{
    //add test cases
    const response = await requset.get('/tryagain'); //async
    expect(response.status).toEqual(404);
});

it('handles internal errors try again',async()=>{
    //add test cases
    const response = await requset.post('/badreq');
    expect(response.status).toEqual(500);
});

it('get data',async()=>{
    //add test cases
    const response = await requset.get('/data');//async
    expect(response.status).toEqual(200);
    expect(typeof response.body).toEqual('obj');
});

it('/route working',async()=>{
    //add test cases
    const response = await requset.get('/');
    expect(response.status).toEqual(200);
    console.log(response.text);
    expect( response.text).toEqual('server running');
});

});