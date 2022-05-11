/**
 * @typedef HeadersAPI
 * @property {"application/json" | "application/x-www-form-urlencoded"} ContentType
 */

/**
 * @typedef FetchAPI
 * @property {"GET" | "POST" | "PUT" | "DELETE"} method *GET, POST, PUT, DELETE, etc.
 * @property {"no-cors" | "cors" | "same-origin"} mode no-cors, *cors, same-origin
 * @property {"default" | "no-cache" | "reload" | "force-cache" | "only-if-cached"} cache *default, no-cache, reload, force-cache, only-if-cached
 * @property {"include" | "same-origin" | "omit"} credentials include, *same-origin, omit
 * @property {HeadersAPI} headers
 * @property {"manual" | "follow" | "error"} redirect manual, *follow, error
 * @property {*} body cannot be used with GET method & body data type must match "Content-Type" header (content to be send)
 * @property {"no-referrer" | "no-referrer-when-downgrade" | "origin" | "origin-when-cross-origin" | "same-origin" | "strict-origin" | "strict-origin-when-cross-origin" | "unsafe-url"} referrerPolicy no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
 */

 class Fetch {
    /**
     * This constructor functions initialize the method Start for processing
     * @param {string} url 
     * @param {FetchAPI} options
     */
    constructor(url, options) {
        this.url = url
        this.options = options
        this.error = null
    }
    async start() {
        await fetch(this.url, this.options)
        .then(results => this.stat = results)
        .then(results => results.json())
        .then(results => this.data = results)
        .catch(err => this.error = err)
    }
}