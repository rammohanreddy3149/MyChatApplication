const dependable = require('dependable');
const path = require('path');

const container = dependable.container();
const validator = require('express-validator');

const simpleDependencies = [
    ['_','lodash'],
    ['passport','passport'],
    ['async','async'],
    ['validator','express-validator'],
    ['mongoose','mongoose'],
    ['formidable', 'formidable'],
    ['Club', './models/clubs'],
    ['aws','./helpers/AWSUpload'],
    ['Users', './models/user'],
    ['Message','./models/message'],
    ['Group', './models/groupmessage'],
    ['FriendResult', './helpers/FriendResult']
];



simpleDependencies.forEach(function(val){
    container.register(val[0], function(){
        return require(val[1]);
    })
});

container.load(path.join(__dirname,'/controllers'));
container.load(path.join(__dirname,'/helpers'));

container.register('container', function(){
    return container;
});

module.exports = container;