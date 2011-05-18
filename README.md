rest.js
=======
* Interact with restfull APIs through JavaScript
* Supports ordinary XHR-requests as well as JSONP
* No dependencies, minimalistic

[DEMO](http://ippa.se/restjs/)

Syntax
------
<pre>
  restjs.get(url, callback)
  restjs.post(url, data, callback)
  restjs.put(url, data, callback)
  restjs.delete(url, callback)
  restjs.login(login)       /* set login to use in all requests */
  restjs.password(password) /* set password to use in all requests */
  restjs.baseURL(url)       /* prefix all requests with this url */
  restjs.useJSONP()         /* use JSONP for all requests */
  restjs.useJSON()          /* use normal JSON for all requests */
  restjs.unpack()           /* make get, post, put & del (delete is a reserved word) available as top level methods */
</pre>

Example
-------
<pre>
  restjs.get("http://twitter.com/status/user_timeline/ippalix.json?count=10", function(data) {
    alert(data[0].text) /* Text of ippalix latest tweet */
  });

  restjs.get("http://www.flickr.com/services/feeds/photos_public.gne?format=json", function(data) {
    data["items"][0]["media"]["m"] /* => http://farm6.static.flickr.com/5064/xxxxxxxxxx.jpg */
  });
</pre>

Gotchas
-------
* Since JSONP is using dynamically injected script-tags, is supports GET (not POST, PUT and DELETE)
* JSON supports all methods, but doesn't work cross domain(This is why the JSONP "hack" was invented)
* restjs.unpack() creates the global functions get(), post(), put() and del(). Not delete() since it's a reserved word in javascript
* No errorhandling just yet, don't make bad API requests ;-)

happy apiing,

ippa.
