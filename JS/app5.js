let num = parseInt(prompt(`Enter a number:`)); 


if (num > 0) {
  
  let isPowerOfThree = true;
 
  while (num > 1) {
    if (num % 3 === 0) { 
      num = num / 3;
    } else {
      isPowerOfThree = false;
      break;
    }
  }
  
  if (isPowerOfThree) {
    console.log(`можна отримати`);
  } else {
    console.log(`Неможна отримати`);
  }
} else {
  console.log(`Введіть додатне число`);
}

