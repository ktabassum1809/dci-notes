import crack from "./recursiveCrack.js";

// Prepare
const target = "fea0f1f6fede90bd0a925b4194deac11";
const haystack = "abcdefghijklmnopqrstuvwxyz".split("");
const maxlength = 6;

// Crack
const startTime = performance.now();
const cracked = crack(maxlength, haystack, target);
const endTime = performance.now();

// Report
console.log("Password cracked: " + cracked);
const seconds = Math.round((endTime - startTime) / 1000);
console.log("Time taken: " + seconds + " seconds");
