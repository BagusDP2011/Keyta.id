const array = [4, 2, 8, 5, 1];

const smallAndLarge = (arr) => {
    const small = Math.min(...arr);
    const large = Math.max(...arr);
    console.log('smallest number, ' + small + ' and largest number, ' + large);
}

smallAndLarge(array)