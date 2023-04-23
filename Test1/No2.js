const fibonacci = (num) => {
  const result = [0, 1];
  for (let i = 2; i < num; i++) {
    result[i] = result[i - 1] + result[i - 2];
  }
  return console.log(result);
};

fibonacci(10);
