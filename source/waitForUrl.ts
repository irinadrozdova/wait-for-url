declare function require(name:string): any;
declare var module: any;

var request = require('request');
var Promise = require('bluebird');

interface setting {
  timeout?: number;
  method?: string;
  counter?: number;
  attempts?: number;
  replayDelay?: number;
    expectedStatusCode?: number;
}

module NPM {

  export function waitForUrl(url:string, options?:setting):any {
      options = options || {};

      options.counter = options.counter || 0;
      options.attempts = options.attempts || 100;
      options.method = options.method || 'GET';
      options.timeout = options.timeout || 60000;
      options.expectedStatusCode = options.expectedStatusCode || 200;
      options.replayDelay = options.replayDelay || 250;

    var promise:any = new Promise((resolve:any, reject:any):any => {
        request({
            method: options.method,
            uri: url,
            timeout: options.timeout
        }, (error:any, response:any, body:any):void => {
            if (options.counter >= options.attempts) {
                resolve(false);
            } else {
                var isOk:any = (
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
}

module.exports = NPM.waitForUrl;
