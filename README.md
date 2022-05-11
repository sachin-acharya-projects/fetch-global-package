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
            * These are the options that can be passed along with xhr requests  
    [Full details on options](https://developer.mozilla.org/en-US/docs/Web/API/fetch)

2. Data Element  
    * This are the results of xhr request that can be obtained with syntax
        * instance.key
        * where
            * instance is instance of class object
            * key is data element
    * Type of Keys  
        * url:  
            * return the url to which xhr request in made  
        * options  
            * return all the options that we passed to xhr request  
        * stat  
            * return all the resolved informations from xhr request (like status, body, data, etc)  
        * data  
            * return required data (JSON) from xhr request if any  
        * error  
            * return informations of error if any  
### Downloads
* v1.0.1 <a href='https://raw.githubusercontent.com/sachin-acharya-projects/fetch-global-package/main/fetch-global-v1.0.1.js' download>Download</a>  
CDN
````url
https://cdn.jsdelivr.net/gh/sachin-acharya-projects/fetch-global-package/fetch-global-v1.0.1.js
````
or
````javascript
import Fetch from 'https://cdn.jsdelivr.net/gh/sachin-acharya-projects/fetch-global-package/fetch-global-v1.0.1.js'
````