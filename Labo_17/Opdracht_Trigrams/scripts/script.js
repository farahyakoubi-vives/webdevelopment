const woord = "onoorbaar";
const trigrams = [];

for (let i = 0; i <= woord.length - 3; i++) {
    trigrams.push(woord.substring(i, i + 3));
}

console.log(`Trigrams van "${woord}":`);
trigrams.forEach(t => console.log(t));
