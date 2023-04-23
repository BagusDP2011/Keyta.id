const array = [4, 2, 2, 8, 5, 1, 2, 4];

const countUnique = (arr) => {
  const sort = arr.sort();
  const newArr = {};
  for (let i = 0; i <= sort.length; i++) {
    if (newArr[sort[i]] === undefined) {
      newArr[sort[i]] = 1;
    } else {
      newArr[sort[i]]++;
    }
  }

  console.log("Duplicate elements:");
  for (const [key, value] of Object.entries(newArr)) {
    if (value > 1) {
      console.log(`${key}: ${value}`);
    }
  }
};

countUnique(array);

//helped by google
