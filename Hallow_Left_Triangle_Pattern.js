const Hallow_Left_Triangle_Pattern = (size) => {
  let pattern = "";
  for (let i = 1; i <= size; i++) {
    for (j = 1; j <= i; j++) {
      if (j === 1 || j === i || i === size) {
        pattern += " *";
      } else pattern += "  ";
    }
    console.log(pattern);
    pattern = "";
  }
};

Hallow_Left_Triangle_Pattern(10);
