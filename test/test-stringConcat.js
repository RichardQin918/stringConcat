const StringConcat = artifacts.require('StringConcat');
const { BN } = require('@openzeppelin/test-helpers');
const chaiBN = require('chai-bn')(BN); 
require('chai').use(chaiBN);
const { expect } = require('chai');
const utils = require('web3-utils');

contract("StringConcat", () =>{
    let stringConcat;
   before(() => {
        return StringConcat.deployed().then(instance => {
            stringConcat = instance;
        })
    })

    it('concat() should pass', async () => {
        const s1 = "Hello"
        const s2 = "World"
        const bytes = await stringConcat.concat(s1, s2);
        const str = utils.toAscii(bytes);
        const result = str.localeCompare("HelloWorld");
        expect(result).to.equal(0, "result should match");
    })
}) 