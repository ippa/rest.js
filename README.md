rest.js
=======
* interact with any restfull api through javascript
* no dependencies at all
* supports both direct requests and model extension (TODO :]...)

Usage
-----
  restjs.get(url, callback)
  restjs.post(url, data, callback)
  restjs.put(url, data, callback)
  restjs.delete(url, callback)

  restjs.unpack()      /* make get, post, put, delete available as top level methods */
  restjs.baseURL(url)  /* prefix all requests with this url */


happy apiing,

ippa.
