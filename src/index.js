'use strict';

process.on('uncaughtException', function(err){
  console.error('uncaughtException: ' + err.message);
  console.error(err.stack);
  process.exit(1);
});


var http = require('http'),
    Minutedock = require('minutedock');

var template = require('es6-template-strings');

var accountId = 1545,
    userId = 1891,
    apiKey = '8ec460b3b51560c8ba29420d3b11d181';

var md = new Minutedock(apiKey);

md.projects.all(accountId, function (err, projects) {
  if (err) {
    console.error(template('Could not load projects for account ${accountId}!', {accountId: accountId}));
    process.exit(1);
  }
  console.log(projects);
});

md.entries.search({users: userId, from: }, function(err, entries) {
  if (err) {
    console.error(template('Could not load entries for user ${userId}!', {userId: userId}));
    process.exit(1);
  }
  console.log(entries);
});
