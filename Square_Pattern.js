const Square_Pattern = (size) => {
  let pattern = "";
  for (let i = 1; i <= size; i++) {
    for (let j = 1; j <= size; j++) {
      pattern += "* ";
    }
    console.log(pattern);
    pattern = "";
  }
};

Square_Pattern(10);
