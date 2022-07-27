// You should implement your task here.

module.exports = function towelSort(matrix) {
    if (matrix == null || matrix.length === 0) {
        return [];
    }
    let array = [];
    let rev = 0;
    for (let i = 0; i < matrix.length; i++) {
        if (rev === 0) {
            for (let j = 0; j < matrix[i].length; j++) {
                array.push(matrix[i][j]);
            }
            rev = 1;
        } else if (rev === 1) {
            for (let j = matrix[i].length - 1; j > -1; j--) {
                array.push(matrix[i][j]);
            }
            rev = 0;
        }
    }
    return array;
};
