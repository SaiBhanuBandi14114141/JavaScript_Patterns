const Hallow_Equilateral_Triangle_Pattern = (size) => {
  let pattern = "";
  for (let i = 1; i <= size; i++) {
    for (let j = 1; j <= size - i; j++) {
      pattern += "  ";
    }
    for (let k = 0; k < 2 * i - 1; k++) {
      if (i === 1 || i === size) {
        pattern += "* ";
      } else {
        if (k === 0 || k === 2 * i - 2) {
          pattern += "* ";
        } else {
          pattern += "  ";
        }
      }
    }
    console.log(pattern);
    pattern = "";
  }
};

Hallow_Equilateral_Triangle_Pattern(10);
