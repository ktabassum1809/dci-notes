# BE - Server - 07: Deployment

> Learning goals
> Deployment
> - What are environment variables
> - Node: examining `process.env`
> 
>
> Secrets
> - Keep your .env out of git, keep secrets out of git
> - Deploying a server on Render

**Yesterday**
- HTTP Status codes
- Error handling in Express
- CORS review
- Mini full stack project demo

**TODAY**
- Environment variables
- Secrets
- Deploying our app

## Environment variables

- Usually you need different configuration for development and production
    - In production you might use different API keys
    - In production you might use different logging

- Let's say you are building an eCommerce site to buy art
    - Development: You send your product orders to a testing payment API URL
    - Production: You send your product orders to the real payment API URL

- Environment variables is very popular for this configuration
 - You have a bunch of environment variables in your system
    - `$ env`
        - These values are accessible to your node programs


        ```js
        console.log(process.env)
        console.log(process.env.PORT)
        ```

- An extremely common way is loading environment variables from a `.env` file
   



## Secrets

- It's very common that an API does not allow anonymous access
- A common strategy is that you are given an API key
    - You must then provide this API key with every request that you do

    ```
    // test.js
    const URL = process.env.URL
    const SECRET = process.env.SECRET

    const response = await fetch(`${URL}${SECRET}`)
    const result = await response.json()
    console.log(result)
    ```

- Production, testing and development might use different URLs
    - Testing credit card payments vs making real credit card payments

- Production, testing and development might use different SECRETs
    - Production secrets might have a different billing account & limits
    - Developers might not have access to production secrets
        - In large companies this is common

- It's also very easy to get yourself blocked from an API
    - You accidentally make too many requests
    - Your API key is accidentally committed to GitHub and someone steals it
    - **DO NOT COMMIT SECRETS LIKE API KEYS**
    - `.env` belongs in `.gitignore`
    - You could have `.env.example` in git to help developers set up though!

## Deployment

- We can't run our backend in GitHub pages
- It's much more complex to run a backend service than to serve static files

- There are two main approaches
    - Deploying on a rented general purpose server where you set it up
    - Deploying on a specialized service that is specifically for Node

- It's becoming more and more popular to deploy using specialized services
    - Often they even connect directly into your GitHub repository
    - They can see when code is added to some branch like `main`
    - They then `git pull` the changes and restart your application
    - This is called "Continuous delivery"

- With these services, configuration options are normally environment variables
    - They might even demand that your app supports certain ones
    - For example; your app must use a specific port from `process.env.PORT`


- Steps of deploying on Render.com
    - On the Dashboard select "Deploy a Web Service"
    - Connect the github repository with the code to be deployed
    - Make sure it is a public repository
    - Name the project
    - Select the language of the code (NodeJS)
    - Select the branch the code is stored under on Github
    - Select a Server to host the project on ( Frankfurt )
    - Specify the root directory of the project (in our case "./")
    - Specify the Build command (npm install)
    - Specify the StartCommand (node index.js)
    - Select Instance Type (pick the free option)
    - Add the environment variables in a name-value fashion
    -Deploy the service


## Wrap-up

- Our apps run in a specific environment, like production or development
- There are variables in these environments that might affect our app
- It's common to store environment variables in `.env`
- For example secret API keys
- Do not commit `.env`
- Do not commit secrets
- But you could commit `.env.example`
- Services like Render.com offer specialized Node hosting

## Exercises
- [09_be-server-process-env](https://classroom.github.com/a/FeZ-T4xJ)
- [10_be-server-weather-cli](https://classroom.github.com/a/N-O_lAlo)


