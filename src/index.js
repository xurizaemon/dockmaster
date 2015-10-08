(function () {
  'use strict';

  process.on('uncaughtException', function(err){
    console.error('uncaughtException: ' + err.message);
    console.error(err.stack);
    process.exit(1);
  });

  var http = require('http'),
      Minutedock = require('minutedock'),
      template = require('es6-template-strings'),
      yaml = require('js-yaml'),
      fs = require('fs');

  var configPath = './config.yml';

  try {
    var config = yaml.safeLoad(fs.readFileSync(configPath, 'utf8'));
    console.log(config);

    var md = new Minutedock(config.api_key);

    md.projects.all(config.account_id, function (err, projects) {
      if (err) {
        console.error(template('Could not load projects for account ${accountId}!', {accountId: config.account_id}));
        process.exit(1);
      }
      console.log(projects, 'projects');
    });

    var from = '2015-10-08 12:00:00';
    md.entries.search({users: [config.user_id], from: from}, function(err, entries) {
      if (err) {
        console.error(template('Could not load entries for user ${userId}!', {userId: config.user_id}));
        process.exit(1);
      }
      console.log(entries, 'entries from ' + from);
    });

  } catch (e) {
    console.log('Unable to load config: ' + configPath);
    console.log(e);
  }

}());
