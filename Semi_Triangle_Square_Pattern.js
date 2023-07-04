const Semi_Triangle_Square_Pattern = (size) => {
  let pattern = "";
  for (let i = 1; i <= size; i++) {
    for (let j = 1; j <= size; j++) {
      if (j === size || i === size || size - i >= j) {
        pattern += "* ";
      } else {
        pattern += "  ";
      }
    }
    console.log(pattern);
    pattern = "";
  }
};

Semi_Triangle_Square_Pattern(10);
