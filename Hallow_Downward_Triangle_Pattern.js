const Hallow_Downward_Triangle_Pattern = (size) => {
  let pattern = "";

  for (let i = 1; i <= size; i++) {
    for (let j = size; j >= i; j--) {
      if (i === 1 || j === size || j === i) {
        pattern += " *";
      } else {
        pattern += "  ";
      }
    }
    console.log(pattern);
    pattern = "";
  }
};

Hallow_Downward_Triangle_Pattern(10);

/*

Output:

 * * * * * * * * * *
 *               *
 *             *
 *           *
 *         *
 *       *
 *     *
 *   *
 * *
 *

*/
