rest.js
=======
* Interact with restfull APIs through JavaScript
* No dependencies

Syntax
-----
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

happy apiing,

ippa.
