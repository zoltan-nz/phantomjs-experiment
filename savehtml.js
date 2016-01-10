var page = require('webpage').create();
var system = require('system');
var fs = require('fs');
var address, fileName;

if (system.args.length !== 3) {
    console.log('Usage: pageloading.js <file_name> <some URL>');
    phantom.exit();
}

fileName = system.args[1];
address = system.args[2];

page.open(address, function(status) {
    console.log('Status: ' +  status);

    if (status === 'success') {
        var content = page.content;
        fs.write('./images/' + fileName + '.html', content, 'w');
    }

    phantom.exit();
});
