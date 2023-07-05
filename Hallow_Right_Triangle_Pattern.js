const Hallow_Right_Triangle_Pattern = (size) => {
  let pattern = "";
  for (let i = 1; i <= size; i++) {
    for (let j = 1; j <= size; j++) {
      if (j === size || i === size || size - i === j - 1) {
        pattern += "* ";
      } else {
        pattern += "  ";
      }
    }
    console.log(pattern);
    pattern = "";
  }
};

Hallow_Right_Triangle_Pattern(10);

/*

Output:

 *
 * *
 *   *
 *     *
 *       *
 *         *
 *           *
 *             *
 *               *
 * * * * * * * * * *

*/
