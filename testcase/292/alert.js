/*
 * LeetCode-javascript
 * https://github.com/oneRice/LeetCode-javascript
 *
 * Copyright (c) 2016 oneRice
 * Licensed under the MIT license.
 */

'use strict';

var Helper = require('./test_helper.js').Helper; // helper module
var stringArray = Helper.stringArray;

var showProblem = function(arg1, stub_res) {
    var msg = '';
    msg += 'The num of nim is ' + arg1 + '. \n';
    msg += 'You can ' + (stub_res?'':'not ')   + 'win this game.\n';
    return msg;
};

var notEqual = function(arg1, stub_res, result) {
    var msg = showProblem(arg1, stub_res);
    msg += 'Your judgement is wrong .\n';
    return msg;
};

exports.notEqual = notEqual;