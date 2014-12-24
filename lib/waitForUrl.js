var request = require('request');
var Promise = require('bluebird');

var NPM;
(function (NPM) {
    function WaitForUrl(url, options) {
        options = options || {};
        options.counter = options.counter || 0;
        options.attempts = options.attempts || 10;
        options.method = options.method || 'GET';
        options.timeout = options.timeout || 60000;
        options.replayDelay = options.replayDelay || 250;

        var promise = new Promise(function (resolve, reject) {
            request({
                method: options.method,
                uri: url,
                timeout: options.timeout
            }, function (error, response, body) {
                var statusCode = null;

                if (options.attempts <= options.counter) {
                    reject(new Error('request timeout'));
                } else if (error) {
                    options.counter = options.counter + 1;
                    Promise.delay(options.replayDelay).then(function () {
                        NPM.WaitForUrl(url, options).then(resolve).catch(reject).done();
                    });
                } else if (response && response.statusCode) {
                    resolve(response.statusCode);
                }
            });
        });

        return promise;
    }
    NPM.WaitForUrl = WaitForUrl;
})(NPM || (NPM = {}));

module.exports = NPM.WaitForUrl;
