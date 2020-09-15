const { calculate, symptoms, conditions } = require('../dist/index.js');

// create shared hashing algorithm for input
const hashKey = v => {
  return v
    .replace(/[,".]/g, '')
    .replace(/\s/g, '')
    .toLowerCase();
};

// create hash map for symptoms
let symptomsHashMap = {};
symptoms.items.forEach((v, i) => {
  symptomsHashMap[hashKey(v.prompt)] = v.key;
  if (v.aliases != undefined) {
    v.aliases.forEach(a => {
      symptomsHashMap[hashKey(a)] = v.key;
    });
  }
});

// create hash map for conditions
let conditionsHashMap = {};
conditions.items.forEach((v, i) => {
  conditionsHashMap[hashKey(v.prompt)] = v.key;
  if (v.aliases != undefined) {
    v.aliases.forEach(a => {
      conditionsHashMap[hashKey(a)] = v.key;
    });
  }
});

let inputSymptoms = ['Shortness of breath'];

let newSymptoms = inputSymptoms.map(v => symptomsHashMap[hashKey(v)]);

let inputConditions = [];

let newConditions = inputConditions.map(v => conditionsHashMap[hashKey(v)]);

const result = calculate({
  symptoms: newSymptoms,
  conditions: newConditions,
});

console.log(result);
