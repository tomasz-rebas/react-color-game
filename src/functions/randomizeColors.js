export default function randomizeColors (rowCount, columnCount, colorCount) {

    let colorGrid = [];

    for (let i = 0; i < rowCount; i++) {
        let row = [];
        for (let j = 0; j < columnCount; j++) {
            const randomColor = Math.floor(Math.random() * colorCount);
            row.push(randomColor);
        }
        colorGrid.push(row);
    }

    return colorGrid;
}