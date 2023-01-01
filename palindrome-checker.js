// Palindrome Checker

// Return true if the given string is a palindrome. Otherwise, return false.

// A palindrome is a word or sentence that's spelled the same way both forward and backward, ignoring punctuation, case, and spacing.

// Note: You'll need to remove all non-alphanumeric characters (punctuation, spaces and symbols) and turn everything into the same case (lower or upper case) in order to check for palindromes.

// We'll pass strings with varying formats, such as racecar, RaceCar, and race CAR among others.

// We'll also pass strings with special symbols, such as 2A3*3a2, 2A3 3a2, and 2_A3*3#A2.

// Solution

// We write a regex for all non-alphanumeric characters, [\W_] is equivalent for [^a-zA-Z0-9_] which means characters other than a to z, A to Z (uppercase letters), numbers from 0 to 9 and also includes underscore (_). We replacing those characters then apply toLowerCase() method to turn everthing into the same case. To check if the reverse spelling of the string is the same, we convert the given string to an array of characters and then apply the reverse() method to reverse the order of the array. Then we convert the reversed array back to string with the join("") method. Our function returns true if the string of alphanumeric characters and the inverted string are equivalent. Otherwise it returns false.

function palindrome(str) {
  return str.replace(/[\W_]/g, "").toLowerCase() ===
    str.replace(/[\W_]/g, "").toLowerCase().split("").reverse().join("")
    ? true
    : false;
}
