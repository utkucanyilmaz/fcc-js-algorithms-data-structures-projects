// Cash Register
// Design a cash register drawer function checkCashRegister() that accepts purchase price as the first argument (price), payment as the second argument (cash), and cash-in-drawer (cid) as the third argument.

// cid is a 2D array listing available currency.

// The checkCashRegister() function should always return an object with a status key and a change key.

// Return {status: "INSUFFICIENT_FUNDS", change: []} if cash-in-drawer is less than the change due, or if you cannot return the exact change.

// Return {status: "CLOSED", change: [...]} with cash-in-drawer as the value for the key change if it is equal to the change due.

// Otherwise, return {status: "OPEN", change: [...]}, with the change due in coins and bills, sorted in highest to lowest order, as the value of the change key.

// Currency Unit	Amount
// Penny	$0.01 (PENNY)
// Nickel	$0.05 (NICKEL)
// Dime	$0.1 (DIME)
// Quarter	$0.25 (QUARTER)
// Dollar	$1 (ONE)
// Five Dollars	$5 (FIVE)
// Ten Dollars	$10 (TEN)
// Twenty Dollars	$20 (TWENTY)
// One-hundred Dollars	$100 (ONE HUNDRED)
// See below for an example of a cash-in-drawer array:

// [
//   ["PENNY", 1.01],
//   ["NICKEL", 2.05],
//   ["DIME", 3.1],
//   ["QUARTER", 4.25],
//   ["ONE", 90],
//   ["FIVE", 55],
//   ["TEN", 20],
//   ["TWENTY", 60],
//   ["ONE HUNDRED", 100]
// ]

// Solution

function checkCashRegister(price, cash, cid) {
  let change = cash * 100 - price * 100; // for simplicity of calculation turn everything into whole number
  let sumOfCID = 0; // this variable used for total cash in drawer
  let returnObj = {
    status: "",
    change: [],
  }; // return this object as a result
  for (let currency of cid) {
    sumOfCID += currency[1] * 100;
  } // for loop for calcute total cash in drawer, we add  every array's second index to sumOfCID
  if (change > sumOfCID) {
    // if change is greater than cash in drawer we assign;
    returnObj.status = "INSUFFICIENT_FUNDS";
    returnObj.change = [];
  } else if (change === sumOfCID) {
    // if change is equals cash in drawer we assign;
    returnObj.status = "CLOSED";
    returnObj.change = cid; // ["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100],
  } else {
    // if situation is different than upper ones;
    cid = cid.reverse(); // reverse cash in drawer array higher to lower currency
    let currencyUnits = {
      // define currency units object and assign all values with multiplying with 100 for simplicity of calculation
      PENNY: 1,
      NICKEL: 5,
      DIME: 10,
      QUARTER: 25,
      ONE: 100,
      FIVE: 500,
      TEN: 1000,
      TWENTY: 2000,
      "ONE HUNDRED": 10000,
    };
    for (let currency of cid) {
      // for loop every currency in cash in drawer array
      let holder = [currency[0], 0]; // holder which is money to be paid to the consumer
      currency[1] = currency[1] * 100; // currency quantity multiplied by 100 for comparison
      while (change >= currencyUnits[currency[0]] && currency[1] > 0) {
        // while change is greater or equal than currencies and currency quantity greater than 0
        change -= currencyUnits[currency[0]]; // substract and assign currencyUnit value to change
        currency[1] -= currencyUnits[currency[0]]; // substract and assign currencyUnit key to currency's second index
        holder[1] += currencyUnits[currency[0]] / 100; // divide currencyUnits value by 100 for correction and add and assign to holder's second index
      }
      if (holder[1] > 0) {
        // if holder value greater than zero push that value to returnObj's change array and change status to open
        returnObj.status = "OPEN";
        returnObj.change.push(holder);
      }
    }

    if (change > 0) {
      // if all of these situations not suitable assing insufficient funds as status and empty array for change
      returnObj.status = "INSUFFICIENT_FUNDS";
      returnObj.change = [];
    }
  }

  return returnObj; // finally we return that object
}

checkCashRegister(19.5, 20, [
  ["PENNY", 1.01],
  ["NICKEL", 2.05],
  ["DIME", 3.1],
  ["QUARTER", 4.25],
  ["ONE", 90],
  ["FIVE", 55],
  ["TEN", 20],
  ["TWENTY", 60],
  ["ONE HUNDRED", 100],
]);
