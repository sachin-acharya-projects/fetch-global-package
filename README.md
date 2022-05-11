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
[Get More informations on parameters and data elements](###parameters-and-more)

### Parameters and More