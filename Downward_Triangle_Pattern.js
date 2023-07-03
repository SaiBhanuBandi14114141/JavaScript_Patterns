const Downward_Triangle_Pattern = (size) => {
  let pattern = "";

  for (let i = 1; i <= size; i++) {
    for (let j = size; j >= i; j--) {
      pattern += "* ";
    }
    console.log(pattern);
    pattern = "";
  }
};

Downward_Triangle_Pattern(10);
