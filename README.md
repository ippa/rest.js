rest.js
=======
* Interact with restfull APIs through JavaScript
* Supports ordinary XHR-requests as well as JSONP
* No dependencies, minimalistic

See index.html for example-usage.

Syntax
------
<pre>
  restjs.get(url, callback)
  restjs.post(url, data, callback)
  restjs.put(url, data, callback)
  restjs.delete(url, callback)
  restjs.unpack()           /* make get, post, put & del (delete is a reserved word) available as top level methods */
  restjs.login(login)       /* set login to use in all requests */
  restjs.password(password) /* set password to use in all requests */
  restjs.baseURL(url)       /* prefix all requests with this url */
  restjs.useJSONP()         /* use JSONP for all requests */
  restjs.useJSON()          /* use normal JSON for all requests */
</pre>


Gotchas
-------
Since JSONP is using dynamically injected script-tags, rectjs doesn't support POST, PUT and DELETE natively using JSONP.
We try to get around this fact with the magic defactostandard _method=XXX parameter.

restjs.unpack() creates the global functions get(), post(), put() and del(). Not delete() since it's a reserved word in javascript.

happy apiing,

ippa.
