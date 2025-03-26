import { createHash } from "crypto";

export function hash(inputString) {
  return createHash("md5").update(inputString).digest("hex");
}

function recursiveCrack(currentString, length, target, haystack) {
  if (currentString.length === length) {
    const hashedString = hash(currentString);
    if (hashedString === target) {
      return currentString;
    }
  } else {
    for (let i = 0; i < haystack.length; i++) {
      const crackedOrFalse = recursiveCrack(
        currentString + haystack[i],
        length,
        target,
        haystack
      );
      if (crackedOrFalse) {
        return crackedOrFalse;
      }
    }
  }
  return false;
}

export default function crack(maxlength, haystack, target) {
  for (let length = 1; length <= maxlength; length++) {
    const result = recursiveCrack("", length, target, haystack);
    if (result) {
      return result;
    }
  }
}
