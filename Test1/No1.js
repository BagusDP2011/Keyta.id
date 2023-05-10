const starsTotal = 5;

const starA = (starsTotal) => {
  for (let i = 0; i <= starsTotal; i++) {
    let row = "";
    for (let j = 0; j < i; j++) {
      row += " *";
    }
    console.log(row);
  }
};

const starB = (starsTotal) => {
  for (let i = starsTotal; i >= 0; i--) {
    let row = "";
    for (let j = 0; j < i; j++) {
      row += " *";
    }
    console.log(row);
  }
};

const starC = (starsTotal) => {
  for (let i = starsTotal; i >= 1; i--) {
    let row = "";
    for (let j = 0; j < i; j++) {
      row += "";
    }
    for (let k = 0; k < i; k++) {
      row += " *";
    }
    console.log(row);
  }
};

const starD = (starsTotal) => {
  for (let i = 0; i < starsTotal; i++) {
    let row = "";
    for (let j = 0; j < starsTotal - i; j++) {
      row += " ";
    }
    for (let k = 0; k <= i; k++) {
      row += " *";
    }
    console.log(row);
  }
};

starA(starsTotal);
starB(starsTotal);
starC(starsTotal);
starD(starsTotal);
