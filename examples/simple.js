const { calculate, calculateLevel } = require('../dist/index.js');

console.log(require('../dist/index.js'));

const { scores, levels } = calculate({
  symptoms: ['fever', 'lossOfSmell'],
  conditions: ['hardBreathing'],
});

console.log(scores);

console.log(levels);

// To directly get the level for a given score, use getLevel.
const likelihoodLevel = calculateLevel('likelihood', 30);

console.log(likelihoodLevel);
