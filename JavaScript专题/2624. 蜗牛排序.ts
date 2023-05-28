declare global {
  interface Array<T> {
    snail(rowsCount: number, colsCount: number): number[][];
  }
}

Array.prototype.snail = function (
  rowsCount: number,
  colsCount: number
): number[][] {
  if (rowsCount * colsCount !== this.length) {
    return [];
  }
  let res = new Array(rowsCount)
    .fill(0)
    .map((item) => new Array(colsCount).fill(0));
  let k = 0;
  for (let i = 0; i < colsCount; i++) {
    for (
      let j = (i & 1) === 0 ? 0 : rowsCount - 1;
      j >= 0 && j < rowsCount;
      (i & 1) === 0 ? j++ : j--
    ) {
      res[j][i] = this[k++];
    }
  }
  return res;
};

/**
 * const arr = [1,2,3,4];
 * arr.snail(1,4); // [[1,2,3,4]]
 */
