/*
 *
 * rest.js - restfull, asynchronous javascript request library (get/post/put/delete)
 *
 * by http://ippa.se/
 *
 */

(function(restjs) {  
  var base_url, login, password
  var use_jsonp = true

  function createCallback(callback) {
    return function onreadystatechange(e) {
      if (this.readyState != 4) { return }
      callback(this.responseText)
    }
  }

  function createID() {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for(var i=0; i < 20; i++) text += possible.charAt(Math.floor(Math.random() * possible.length));
    return text
  }

  restjs.useJSON = function()                 { use_jsonp = false; return restjs }
  restjs.useJSONP = function()                { use_jsonp = true; return restjs }
  restjs.login = function(l)                  { login = l; return restjs }
  restjs.password = function(p)               { password = p; return restjs }
  restjs.baseURL = function(url)              { base_url = url; return restjs }
  restjs.get = function(url, callback)        { restjs.request('GET', url, null, callback)  }
  restjs.post = function(url, data, callback) { restjs.request('POST', url, data, callback) }
  restjs.put = function(url, data, callback)  { restjs.request('PUT', url, data, callback)  }
  restjs.delete = function(url, callback)     { restjs.request('DELETE', url, callback)     }
 
  restjs.request = function(method, url, data, callback) {
    if(use_jsonp) {
      var script = document.createElement("script")
      var callback_name = createID()
      window[callback_name] = function(data) { callback(data) }
  
      url += (url.indexOf("?")==-1) ? "?" : "&"   /* Add ? or & depending on how the current URL looks */
      url += "callback=" + callback_name + "&jsoncallback=" + callback_name
      if(method != "GET")  { 
        url += "?_method=" + method
        throw "JSONP doesn't suppoert " + method
      }

      script.type = "text/javascript" 
      script.src = url
      document.getElementsByTagName('head')[0].appendChild(script)
      console.log(url)
    }
    else {
      var req = new XMLHttpRequest()
      req.onreadystatechange = createCallback(callback)
      req.open(method, url, true, login, password)
      data ? req.send(data) :  req.send(null)
    }
  }
  
  restjs.unpack = function() {
    window.get = restjs.get
    window.post = restjs.post
    window.put = restjs.put
    window.del = restjs.delete
  }

  window.restjs = restjs
})(window.restjs||{})
