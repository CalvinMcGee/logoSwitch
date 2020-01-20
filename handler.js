'use strict';

const logoSwitch = require('./logoSwitch.js');

module.exports.logoSwitch = function(event, context) {
    logoSwitch.switch();
};
