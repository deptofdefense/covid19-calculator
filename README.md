# COVID-19 Calculator

[![npm version](https://badge.fury.io/js/%40deptofdefense%2Fcovid19-calculator.svg)](https://badge.fury.io/js/%40deptofdefense%2Fcovid19-calculator)

## Description

COVID-19 Calculator provides a set of scoring algorithms for evaluating COVID-19 symptoms implemented in [TypeScript](https://www.typescriptlang.org/). The algorithms and associated inputs in this model are based on United States Department of Defense medical opinion and are actively used in [MySymptoms.mil](https://mysymptoms.mil/).

This calculator is currently maintained by [Defense Digital Service](https://dds.mil/) (DDS).

## Usage

### Installation

NPM:

```
npm install @deptofdefense/covid19-calculator
```

Yarn:

```
yarn add @deptofdefense/covid19-calculator
```

### Latest Calculator

Importing from the base will import the latest version.

ES6:

```TSX
import { ages, conditions, symptoms, /*...*/ calculate } from '@deptofdefense/covid19-calculator'
```

CommonJS:

```TSX
const { ages, conditions, symptoms, /*...*/ calculate } = require('@deptofdefense/covid19-calculator')
```

### Previous Calculator

If you are interested in importing a previous version simply append the version. Each version functions as an independent package and thus the exports and [TypeScript](https://www.typescriptlang.org/) types may be different between versions.

ES6:

```TSX
import { v1_3_0 } from '@deptofdefense/covid19-calculator'
const { ages, conditions, symptoms, /*...*/ calculate } = v1_3_0
```

CommonJS:

```TSX
const { v1_3_0 } = require('@deptofdefense/covid19-calculator')
const { ages, conditions, symptoms, /*...*/ calculate } = v1_3_0

```

### API

The following functions are exported. A category is a string in the exported list `categories`, i.e., `likelihood`, `exposure`, or `preExisting`. A score is an integer `[0, N)` with the maximum number changing depending on the model version. A level is a human-readable string the indicates the magnitude of the score, e.g., `low`, `medium`, or `high`.

NOTE: At this time, consider this api in "beta" with the possibility of changing slightly in future releases.

```TSX
import { calculate, calculateScores, calculateLevel, calculateLevels } from '@deptofdefense/covid19-calculator'
// calculate returns the integer scores and string levels
const { scores, levels } = calculate({ ... })
// calculateScores just returns the integer scores
const { likelihoodScore, exposureScore, preExistingScore } = calculateScores({
  symptoms: [...],
  conditions: [...]
})
// calculateLevels returns the string levels for the given scores
const { likelihoodLevel, exposureLevel, preExistingLevel } = calculateLevels({
  likelihoodScore,
  exposureScore,
  preExistingScore
})
// calculateLevel returns the string level for the given score
const { likelihoodLevel } = calculateLevel('likelihood', 30)
```

If you need to correlate incoming data with calculator parameters, consider using a hashing algorithm to resolve parameters. See the [advanced example](examples/advanced.js) for more info.

## Examples

For the full list of examples see the [examples](examples) folder.

### Simple Example

```TSX
const { calculate } = require('@deptofdefense/covid19-calculator');

const result = calculate({
  symptoms: ['fever', 'lossOfSmell'],
  conditions: ['hardBreathing'],
});
/*
 * result
 * {
 *   scores: { likelihood: 20, exposure: 0, preExisting: 0 },
 *   levels: { likelihood: 'low', exposure: 'low', preExisting: 'low' }
 * }
 */
```

## Current Model

### Data

#### Ages

- What's your age (in years)?
  - 0-17 - preExisting: 0
  - 18-39 - preExisting: 0
  - 40-64 - preExisting: 0
  - 65-69 - preExisting: 10
  - 70-79 - preExisting: 15
  - 80-Infinity - preExisting: 20

#### Exposures

- In the last 14 days, did you have close contact with someone with symptoms of COVID-19 or diagnosed with COVID-19?
  - contact - Yes - exposure: 30
  - possibleContact - I Don't Know - exposure: 10
  - noContact - No - exposure: 0

#### Symptoms

- Select your current symptoms:
  - cough - Cough - likelihood: 20
  - sob - Shortness of breath - likelihood: 20
  - fever - Fever - likelihood: 20
  - bodyAches - Body aches or muscle pain - likelihood: 10
  - headache - Headache - likelihood: 10
  - throat - Sore throat - likelihood: 10
  - chills - Chills or repeated shaking with chills - likelihood: 10
  - lossOfSmell - New loss of taste or smell - likelihood: 20
  - vomiting - Nausea or vomiting (aliases: Vomiting) - likelihood: 5
  - dizziness - Dizziness or lightheadedness - likelihood: 5
  - diarrhea - Diarrhea - likelihood: 5
  - fatigue - Fatigue - likelihood: 5
  - congestion - Congestion or runny nose - likelihood: 5

#### Conditions

- Select current conditions:
  - arouse - Disoriented or inability to wake/stay awake (worse than sleepy) (aliases: 'New confusion or inability to arouse', 'Confusion or inability to wake / stay awake') - likelihood: 40
  - hardBreathing - Trouble or difficulty breathing - likelihood: 40
  - chestPain - Persistent pain or pressure in the chest - likelihood: 40
  - blueLips - Bluish lips or face - likelihood: 40

#### Pre-existing Conditions

- Select pre-existing conditions:
  - diabetesType2 - Type 2 diabetes mellitus - preExisting: 20
  - heartDisease - Heart conditions, such as heart failure, coronary artery disease, or cardiomyopathies - preExisting: 20
  - cancer - Cancer - preExisting: 20
  - kidneyDisease - Chronic kidney disease - preExisting: 20
  - copd - COPD - preExisting: 20
  - organTransplant - Had a solid organ transplant - preExisting: 20
  - sickleCellDisease - Sickle cell disease - preExisting: 20
  - overweight - Very overweight (Body Mass Index (BMI) of 30 or higher) - preExisting: 20
  - asthma - Asthma - preExisting: 15
  - smoke - Currently smoking - preExisting: 15
  - steroids - Take corticosteroids or other immunosuppressive medications - preExisting: 15
  - pregnant - Pregnant - preExisting: 15
  - cerebrovascular - Cerebrovascular disease - preExisting: 15
  - hypertension - Hypertension - preExisting: 15
  - diabetesType1 - Type 1 diabetes - preExisting: 10
  - lungDisease - Cystic fibrosis, emphysema, or other chronic lung diseases - preExisting: 10
  - thalassemia - Thalassemia - preExisting: 10
  - neurologicCondition - Neurologic conditions - preExisting: 10
  - liverDisease - Liver disease - preExisting: 10
  - compromisedImmuneSystem - Compromised immune system - preExisting: 10
  - hiv - HIV - preExisting: 10
  - boneMarrowTransplant - Had a bone marrow transplant - preExisting: 10

### Scales

#### Likelihood

- veryLow: 0 - 9
- low: 10 - 19
- medium: 20 - 39
- high: 40 - 69
- veryHigh: 70+

#### PreExisting

- low: 0 - 9
- medium: 10 - 29
- high: 30+

#### Exposure

- low: 0 - 9
- medium: 10 - 29
- high: 30+

## Local Development

This project was bootstrapped with [TSDX](https://github.com/jaredpalmer/tsdx). Below is a list of commands you will probably find useful.

### `npm start` or `yarn start`

Runs the project in development/watch mode. Your project will be rebuilt upon changes. TSDX has a special logger for you convenience. Error messages are pretty printed and formatted for compatibility VS Code's Problems tab. Your library will be rebuilt if you make edits.

### `npm run build` or `yarn build`

Bundles the package to the `dist` folder. The package is optimized and bundled with Rollup into multiple formats (CommonJS, UMD, and ES Module).

### `npm test` or `yarn test`

Runs the test watcher (Jest) in an interactive mode. By default, runs tests related to files changed since the last commit.

## Contributing

We'd love to have your contributions! Please see [CONTRIBUTING.md](CONTRIBUTING.md) for more info.

## Security

Please see [SECURITY.md](SECURITY.md) for more info.

## License

This project constitutes a work of the United States Government and is not subject to domestic copyright protection under 17 USC § 105. However, because the project utilizes code licensed from contributors and other third parties, it therefore is licensed under the MIT License. See LICENSE file for more information.
