function maxArea(grid) {
  var m, n;
  m = grid.length;
  n = grid[0].length;
  var positionsOfOnesInRow = [];

  grid.forEach((e) => {
    var array = [];
    var count = 0;
    e.forEach((elem) => {
      count++;
      if (elem === 1) {
        array.push(count - 1);
      }
      if (count == n) {
        positionsOfOnesInRow.push(array);
      }
    });
  });
}
maxArea([
  [0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
  [0, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 1, 0, 0, 1, 1, 0, 0, 1, 0, 1, 0, 0],
  [0, 1, 0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0],
]);
