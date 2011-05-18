/*
 *
 * rest.js - restfull, asynchronous javascript request library (get/post/put/delete)
 *
 * by http://ippa.se/
 *
 */

(function(restjs) {  
  var base_url, login, password
  
  function createCallback(callback) {
    return function onreadystatechange(e) {
      if (this.readyState != 4) { return }
      callback(this.responseText)
    }
  }

  restjs.login = function(l)                  { login = l; return restjs; }
  restjs.password = function(p)               { password = p; return restjs; }
  restjs.baseURL = function(url)              { base_url = url; return restjs; }
  restjs.get = function(url, callback)        { restjs.request('GET', url, null, callback)  }
  restjs.post = function(url, data, callback) { restjs.request('POST', url, data, callback) }
  restjs.put = function(url, data, callback)  { restjs.request('PUT', url, data, callback)  }
  restjs.delete = function(url, callback)     { restjs.request('DELETE', url, callback)     }
 
  restjs.request = function(method, url, data, callback) {
    var req = new XMLHttpRequest()
    req.onreadystatechange = createCallback(callback)
    req.open(method, url, true, login, password)
    data ? req.send(data) :  req.send(null)
  }

  window.restjs = restjs
})(window.restjs||{})
