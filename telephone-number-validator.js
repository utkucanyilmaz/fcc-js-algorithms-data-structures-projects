// Telephone Number Validator
// Return true if the passed string looks like a valid US phone number.

// The user may fill out the form field any way they choose as long as it has the format of a valid US number. The following are examples of valid formats for US numbers (refer to the tests below for other variants):

// 555-555-5555
// (555)555-5555
// (555) 555-5555
// 555 555 5555
// 5555555555
// 1 555 555 5555

// For this challenge you will be presented with a string such as 800-692-7753 or 8oo-six427676;laskdjf. Your job is to validate or reject the US phone number based on any combination of the formats provided above. The area code is required. If the country code is provided, you must confirm that the country code is 1. Return true if the string is a valid US phone number; otherwise return false.

// Solution
// In first group the regex checks if the given string starts with 1 country code. It checks for a value of 1 and \s, that is, whether white spaces are optionally present at the beginning. The second group checks whether the numbers following the first group are in parentheses or are 3 numbers.The third and fifth groups controls the optional white space and dashes between groups. The fourth group checks if the following numbers are 3 numbers and finally the last group checks if the string ends with 4 numbers.

function telephoneCheck(str) {
  let regex = /^(1?\s?)(\(\d{3}\)|\d{3})([\s-]?)(\d{3})([\s-]?)(\d{4})$/;
  return regex.test(str);
}
