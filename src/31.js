function sum(numbers) {
  if (numbers.length === 0 || numbers[0] !== +numbers[1]) throw new Error("The array is not properly formatted");
  
  let total = 0;
  
  for (let i = 1; i < numbers.length; i++) {
    total += numbers[i];
    
    if (numbers[i] === 0) break;
  }
  
  return total;
}
