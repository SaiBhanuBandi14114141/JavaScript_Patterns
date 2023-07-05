const Equilateral_Triangle_Pattern = (size) => {
  let pattern = "";
  for (let i = 1; i <= size; i++) {
    for (let j = 1; j <= size; j++) {
      if (size - j < i) {
        pattern += " *";
        //alternative to above line => pattern += "* "
      } else pattern += " ";
    }
    console.log(pattern);
    pattern = "";
  }
};

Equilateral_Triangle_Pattern(10);

/*

Output:

          *
         * *
        * * *
       * * * *
      * * * * *
     * * * * * *
    * * * * * * *
   * * * * * * * *
  * * * * * * * * *
 * * * * * * * * * *

*/
