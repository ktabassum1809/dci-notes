# Introduction to HTTP Headers and security

## last day:

- async/await

## today:

- HTTP headers
- CORS and SOP
- Proxies

### exercises

- Let's finish all previous exercises and prepare the exam

## Theory

### HTTP Headers - POST

- We have previously done only GET requests
- There are other kinds of requests as well
    - GET requests generally are for GETting data
    - But for creating data, POST is often used

- Without extra options fetch makes a simple GET request
    - Fetch actually takes in another parameter for configuring the request
    - Let's POST with fetch:

```js
const url = "https://jsonplaceholder.typicode.com/todos"
const options = {
    method: "POST",
}
const response = await fetch(url, options)
const result = await response.json()
console.log(result)
```
- HTTP Request have four parts
- Method, URL, Body, Headers
    - The body is where data can be sent (like in the example below)
    - GET requests practically never have a body
    - To send data in a request body, we must describe what kind of data is it
    - This is done with HTTP Headers

- HTTP Headers
    - Headers describe request and can contain extra data to go with the request
    - Such as describing the content type
    - Responses have headers too
    - We will learn more about this in the future

Let's send some data along with our POST request

```js
const url = "https://jsonplaceholder.typicode.com/todos"
const options = {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    url: "https://whatever.com",
    body: JSON.stringify({text:"Do the dishes!"})
}
const response = await fetch(url, options)
const result = await response.json()
console.log(result)
```

### CORS and SOP

- Related terminology: "Origin"
    - What are the different parts of an URL?
        - Protocol, domain, port, resource path, etc...
    - The "origin" is the combination of the protocol, domain and port of an URL

- Your website is: http://ddg.gg:80/
    - Same origin: http://ddg.gg:80/ - same protocol, domain, port
    - Same origin: http://ddg.gg:80/style.css - same protocol, domain, port
    - Same origin: http://ddg.gg:80/login - same protocol, domain, port
    - NOT same origin: http://AAA.gg:80/login - different domain
    - NOT same origin: http://ddg.de:80/login - different domain
    - NOT same origin: http://ddg.gg:21/login - different port
    - NOT same origin: https://ddg.gg:80/login - different protocol

#### SOP - Same Origin Policy

- Scripts on one origin can only access data from the same origin as itself
- This is the SOP; a policy that browsers follow
- SOP was introduced to prevent cross-site request forgery attacks (CSRF)
- CSRF simplified example
    - You visit mybank.com and log in
    - Now mybank.com trusts the requests coming from your browser are from you
    - You visit evil-hacker.com
        - A script in evil-hacker.com makes a request to transfer money
            - fetch("mybank.com/sendmoney?to=evilhacker")
    - Now mybank.com sees a request coming from your browser
        - They trust it's coming from you and transfer the money
        - Damn you evil hacker!
        - CORS prevents this

- Sometimes you still need to get data from other services, other origins
- CORS is a mechanism that allows resources to be shared across origins
- CORS allows bypassing the SOP, but in a controlled and secure way

#### CORS - Cross-Origin Resource Sharing

- It allows us to send requests from one origin to another origin
- CORS needs to be enabled by the service you are contacting
    - So mybank.com needs to allow requests from evil-hacker.com

- For CORS requests, your browser actually makes two requests
    - A "preflight" request to verify CORS
        - "Hey mybank.com, do you allow requests from evil-hacker.com"
    - Then the actual request itself

### Proxies

- The SOP and CORS are features of the browser

- In computer networking, a proxy server acts as an intermediary between a client and a server. It forwards requests from the client to the server and then relays the server's response back to the client. Proxies are often used for:
    - Anonymity: Hiding the user's real IP address.
    - Security: Filtering traffic or preventing access to certain sites.
    - Caching: Storing copies of frequently accessed resources for faster delivery.