const createCounter = (n) => {
  let currentValue = n;

  const counter = () => {
    const result = currentValue;
    currentValue += 1;
    return result;
  };

  return counter;
};

// Example usage:
const initial_value = 5;
const myCounter = createCounter(initial_value);

console.log(myCounter()); 
console.log(myCounter()); 
console.log(myCounter()); 
console.log(myCounter());
console.log(myCounter()); 
