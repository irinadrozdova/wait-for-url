var request = require('request');
var Promise = require('bluebird');

function waitForUrl(url, options) {
    options = options || {};

    options.counter = options.counter || 0;
    options.attempts = options.attempts || 100;
    options.method = options.method || 'GET';
    options.timeout = options.timeout || 60000;
    options.expectedStatusCode = options.expectedStatusCode || 200;
    options.replayDelay = options.replayDelay || 250;

    var promise = new Promise(function (resolve, reject) {
        request({
            method: options.method,
            uri: url,
            timeout: options.timeout
        }, function (error, response) {
            if (options.counter >= options.attempts) {
                resolve(false);
            } else {
                var isOk = (
                    response &&
                    response.statusCode &&
                    response.statusCode === options.expectedStatusCode
                );

                if (error || !isOk) {
                    options.counter = options.counter + 1;
                    setTimeout(function () {
                        waitForUrl(url, options).then(resolve).catch(reject);
                    }, options.replayDelay);
                } else {
                    resolve(true);
                }
            }
        });
    });

    return promise;
}

module.exports = waitForUrl;
