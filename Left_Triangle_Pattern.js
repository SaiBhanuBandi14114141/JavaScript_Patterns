const Left_Triangle_Pattern = (size) => {
  let pattern = "";

  for (let i = 1; i <= size; i++) {
    for (let j = 1; j <= i; j++) {
      pattern += " *";
    }
    console.log(pattern);
    pattern = "";
  }
};

Left_Triangle_Pattern(10);
