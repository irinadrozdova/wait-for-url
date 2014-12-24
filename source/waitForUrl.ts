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
}

module NPM {

  export function WaitForUrl(url:string, options?:setting):any {
    options = options || {}
    options.counter = options.counter || 0;
    options.attempts = options.attempts || 10;
    options.method = options.method || 'GET';
    options.timeout = options.timeout || 60000;
    options.replayDelay = options.replayDelay || 250;


    var promise:any = new Promise((resolve:any, reject:any):any => {

      request({
        method: options.method,
        uri: url,
        timeout: options.timeout,
      }, (error:any, response:any, body:any):void => {

        var statusCode:any = null;

        if(options.attempts <= options.counter){
          reject(new Error('request timeout'));
        }else if(error){
          options.counter = options.counter + 1;
          Promise.delay(options.replayDelay).then(():void => {
            NPM.WaitForUrl(url, options)
            .then(resolve)
            .catch(reject)
            .done();
          })
        }else if(response && response.statusCode){
          resolve(response.statusCode);
        }
      });

    });

    return promise

  }

}

module.exports = NPM.WaitForUrl
