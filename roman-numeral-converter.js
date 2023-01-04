// Roman Numeral Converter

// Convert the given number into a roman numeral.

// Roman numerals	Arabic numerals

// M	1000
// CM	900
// D	500
// CD	400
// C	100
// XC	90
// L	50
// XL	40
// X	10
// IX	9
// V	5
// IV	4
// I	1

// All roman numerals answers should be provided in upper-case.

// Solution
// We create 2 different arrays for roman and arabic numerals. And define romanNumeral string for the result. In for loop we are checking while number is less than or equals arabic numerals we add romen numeral to romanNumerals string and we substract arabic numerals from number and assign this number to our num variable. After this loop we return romanNumeral string.

function convertToRoman(num) {
  const romanNumerals = [
    "M",
    "CM",
    "D",
    "CD",
    "C",
    "XC",
    "L",
    "XL",
    "X",
    "IX",
    "V",
    "IV",
    "I",
  ];
  const arabicNumerals = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  let romanNumeral = "";

  for (let i = 0; i < arabicNumerals.length; i++) {
    while (arabicNumerals[i] <= num) {
      romanNumeral += romanNumerals[i];
      num -= arabicNumerals[i];
    }
  }
  return romanNumeral;
}

convertToRoman(36);
