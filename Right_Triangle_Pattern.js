const Right_Triangle_Pattern = (size) => {
  let pattern = "";
  for (let i = 1; i <= size; i++) {
    for (let j = 1; j <= size; j++) {
      if (size - j < i) {
        pattern += "*";
      } else pattern += " ";
    }
    console.log(pattern);
    pattern = "";
  }
};

Right_Triangle_Pattern(10);
