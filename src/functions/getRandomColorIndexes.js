export default function getRandomColorIndexes (colorCount, indexCount) {
    let indexes = []
    for (let i = 0; i < indexCount; i++) {
        indexes.push(Math.floor(Math.random() * colorCount));
    }
    return indexes;
}