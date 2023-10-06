'use strict'

const allCashbox = [4500, 3210, 650, 1250, 7830, 990, 13900, 370];

const getAverageValue = (arr) => {
    let num = 0;
      for (let i = 0; i < arr.length; i++) {
        num += arr[i];
      };
      const totalCheck = num / arr.length;
     
      console.log(totalCheck);
  };
  
  getAverageValue(allCashbox);