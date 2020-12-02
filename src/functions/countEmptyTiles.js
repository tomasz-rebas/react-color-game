export default function countEmptyTiles (grid) {
    let count = 0;
    grid.forEach(row => {
        row.forEach(value => {
            if (value === -1) {
                count ++;
            }
        })
    });
    return count;
}