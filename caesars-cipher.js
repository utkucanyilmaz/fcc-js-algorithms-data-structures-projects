// Caesars Cipher
// One of the simplest and most widely known ciphers is a Caesar cipher, also known as a shift cipher. In a shift cipher the meanings of the letters are shifted by some set amount.

// A common modern use is the ROT13 cipher, where the values of the letters are shifted by 13 places. Thus A ↔ N, B ↔ O and so on.

// Write a function which takes a ROT13 encoded string as input and returns a decoded string.

// All letters will be uppercase. Do not transform any non-alphabetic character (i.e. spaces, punctuation), but do pass them on.

// Solution

function rot13(str) {
  // First of all define range, upperLimit and lowerLimit from UTF-16 decimal table for letters from uppercase A to Z. For table go this link.
  // https://asecuritysite.com/coding/asc2
  const upperLimit = 90;
  const lowerLimit = 64;
  // After defining upper and lower limit also define shiftedPlace which 13 for this case.
  const shiftedPlace = 13;
  // Then we define an array to push the characters that suitable for our cases.
  const strArr = [];

  for (let i = 0; i < str.length; i++) {
    // In the for loop, we first check whether the character in the given string exceeds the upperLimit after shifted 13 place.
    if (str.charCodeAt(i) + shiftedPlace > upperLimit) {
      // If it exceeds the upper limit, we first subtract the upper limit from the char code. This gives us a negative value and adds the lower limit to include it in the char range (between upperLimit and lowerLimit). Then, by adding shiftedPlace, we get the character code 13 steps after.
      strArr.push(lowerLimit + str.charCodeAt(i) - upperLimit + shiftedPlace);
    } else if (
      // If our character code is within the given range, that is, it does not exceed the upper limit,
      str.charCodeAt(i) <= upperLimit &&
      str.charCodeAt(i) > lowerLimit
    ) {
      // We add 13 (shiftedPlace) value and push the character code to the array.
      strArr.push(str.charCodeAt(i) + shiftedPlace);
    } else {
      // If the char code does not provide other conditions, that is, it is not between A-Z (a character other than uppercase letters),  we push the character code as it is.
      strArr.push(str.charCodeAt(i));
    }
  }
  return String.fromCharCode(...strArr); // Finally, we create a string from the character codes we obtained using the string method (String.fromCharCode()). This string method creates a string from comma-separated char code values.
}

rot13("SERR PBQR PNZC");

// For more information;

// String.charCodeAt() - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/charCodeAt

// String.fromCharCode() - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/fromCharCode

// Spread(...) Operator - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax
