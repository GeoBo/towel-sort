// You should implement your task here.

module.exports = function towelSort (matrix) {
    if (!matrix || !matrix.length) return [];

    return matrix
        .map ((item, index) => {
            if (index % 2 == 1) item.reverse ();
            return item.join (",");
        })
        .join (",")
        .split (",");
        //.map ((item) => +item);
};
