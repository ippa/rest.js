rest.js
=======
* Interact with restfull APIs through JavaScript
* No dependencies

Usage
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
</pre>

happy apiing,

ippa.
