var page = require('webpage').create();
var system = require('system');
var address, imageName;

if (system.args.length !== 3) {
    console.log('Usage: pageloading.js <image_name> </image_name><some URL>');
    phantom.exit();
}

imageName = system.args[1];
address = system.args[2];

page.open(address, function(status) {
   console.log('Status: ' +  status);

    if (status === 'success') {
        page.render('./images/' + imageName + '.png');
    }

    phantom.exit();
});
