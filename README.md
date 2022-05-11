# fetch-global-package
___________________________________________
### Description
This is a JavaScript Library that makes use of fetch web api and provide resolve data globally or to certain scope.

### Example
1. HTML File
````html
...
<body>
    ...
    <!--
        Note:
        index.js is users JavaScript file
        is type must be specified as module inside <script> tag
    -->
    <script type='module' src='index.js'></script>
    ...
</body>
...
````
2. Inside JavaScript File (index.js)
````javascript
    import Fetch from "/path/fetch-global.js"; // Importing or linking library with javascript file
    
    const fetch_ = new Fetch(url: string, options: object) // making instance of Fetch class
    await fetch_.start() // Starting XHR process

    fetch_.[items] // Geting Results back
````
[Get More informations on parameters and data elements](#parameters-and-more)

### Parameters and More
1. Parameter for constructor
* Constructor requires 2 parameters
    * __url (String)__
      * This is the url to api where xhr request is to be send
    * __options (Object)__
      * This are the options that can be passed along with xhr requests
[Full details on options](https://developer.mozilla.org/en-US/docs/Web/API/fetch)
````javascript  
    /**
     * @property {"application/json" | "application/x-www-form-urlencoded"} ContentType
     */

    /**
     * @property {"GET" | "POST" | "PUT" | "DELETE"} method *GET, POST, PUT, DELETE, etc.  
     * @property {"no-cors" | "cors" | "same-origin"} mode no-cors, *cors, same-origin  
     * @property {"default" | "no-cache" | "reload" | "force-cache" | "only-if-cached"} cache   
     * *default, no-cache, reload, force-cache, only-if-cached  
     * @property {"include" | "same-origin" | "omit"} credentials include, *same-origin, omit  
     * @property {HeadersAPI} headers  
     * @property {"manual" | "follow" | "error"} redirect manual, *follow, error  
     * @property {*} body   
     * cannot be used with GET method & body data type must match "Content-Type" header (content to be send)  
     * @property {"no-referrer" | "no-referrer-when-downgrade" | "origin" | "origin-when-cross-origin" | "same-origin" | "strict-origin" | "strict-origin-when-cross-origin" | "unsafe-url"} referrerPolicy   
     * no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
     */
````
2. Data Element  
    * This are the results of xhr request that can be obtained with syntax
        * instance.key
        * where
            * instance is instance of class object
            * key is data element
    * Type of Keys
        a. url:
            return the url to which xhr request in made
        b. options
            return all the options that we passed to xhr request
        c. stat
            return all the resolved informations from xhr request (like status, body, data, etc)
        d. data
            return required data (JSON) from xhr request if any
        e. error
            return informations of error if any
### Downloads
v1.0.1