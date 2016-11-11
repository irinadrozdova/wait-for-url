wait-for-url
============
> Suspend the test until the specified URL is loaded.

### About
  Wait For URL is particularly useful when you have a redirection and need to wait for the final URL to be loaded, before running you're next test.

### Install

```js
npm install wait-for-url --save-dev
```

## Usage

##### Wait For URL
```js
var waitForUrl = require('wait-for-url');

waitForUrl('https://github.com/')
  .done(function(responseStatus){
    //do something
  })
  .catch(function(error){
    //do something
  })
```

##### Change default options
```js
var waitForUrl = require('wait-for-url');

waitForUrl('https://github.com/', {
  attempts: 10, // attempts before failing
  method: 'GET', // http request method (GET, POST, PUT...)
  timeout: 60000, // threshold before request timeout
  replayDelay: 250, // time before retrying,
  expectedStatusCode: 200
})
  .done(function(responseStatus){
    //do something
  })
  .catch(function(error){
    //do something
  })
```

### Authors
  - [Roberto Carlos Marte](http://carlosmarte.me/)

## License

(The MIT License)

Copyright (c) 2014 Carlos Marte &lt;opensource@carlosmarte.me&gt;

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
'Software'), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

##### This file was generated on December 21 2014.
