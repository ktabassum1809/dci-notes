import dotenv from "dotenv";

dotenv.config();

/* A note on this solution */
/* For the purposes of demonstration, the .env file has been
added to the repository. However, normally the .env file
would be ignored with the .gitignore file */

console.log(process.env.SERVER_NAME);
console.log(process.env.SERVER_CPU);
console.log(process.env.SERVER_URL);
console.log(process.env.SERVER_LOG);

console.log(
  `Hallo! Ich bin ${process.env.SERVER_NAME}! Ich habe ein ${process.env.SERVER_CPU}, und mein URL ist ${process.env.SERVER_URL}. Ich schreibe alles was passiert zu ${process.env.SERVER_LOG}`
);
