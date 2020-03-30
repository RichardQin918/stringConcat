const StringConcat = artifacts.require('StringConcat');

module.exports = function(deployer) {
    deployer.deploy(StringConcat);
}