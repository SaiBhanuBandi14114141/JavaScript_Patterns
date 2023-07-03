const HollowSquarePattern = (size) => {
  for (let i = 0; i < size; i++) {
    let pattern = "";
    for (let j = 0; j < size; j++) {
      if (i === 0 || i === size - 1 || j === 0 || j === size - 1) {
        pattern += "*";
      } else {
        pattern += " ";
      }
    }

    console.log(pattern);
  }
};

HollowSquarePattern(10);
