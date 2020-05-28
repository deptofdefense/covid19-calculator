# Version 1.1.0 - 4/7/2020

## Medical Discussion

The scoring system was made more sensitive. A combination of COVID-19 symptoms that were originally deemed not as high a likelihood now fall under a higher category. This is based on CDC guidelines on monitoring a combination of symptoms and its effect on a person. Select groupings of symptoms and conditions can indicate a higher likelihood than other groupings.

## Current Model

### Data

#### Ages

- 0-17 - preExisting: 0
- 18-39 - preExisting: 0
- 40-64 - preExisting: 0
- 65-69 - preExisting: 10
- 70-79 - preExisting: 15
- 80-Infinity - preExisting: 20

#### Exposures

- travelCountry - exposure: 10
- travelState - exposure: 10
- outsideContact - exposure: 30

#### Symptoms

- fever - likelihood: 20
- cough - likelihood: 20
- sob - likelihood: 20
- chestPain - likelihood: 20
- diarrhea - likelihood: 20
- bodyAches - likelihood: 20
- headache - likelihood: 20
- throat - likelihood: 20
- fatigue - likelihood: 15
- eyes - likelihood: 10
- lossOfSmell - likelihood: 5

#### Conditions

- hardBreathing - likelihood: 20
- throwingUp - likelihood: 20
- confusion - likelihood: 20
- dizziness - likelihood: 10
- worseningSymptoms - likelihood: 20

#### Pre-existing Conditions

- asthma - preExisting: 20
- diabetes - preExisting: 20
- heartDisease - preExisting: 20
- hemodialysis - preExisting: 20
- chemotherapy - preExisting: 20
- transplant - preExisting: 20
- sickleCellDisease - preExisting: 20
- steroids - preExisting: 20
- otherConditions - preExisting: 20
- overweight - preExisting: 10
- weakMuscles - preExisting: 10
- difficultyThinking - preExisting: 10
- pregnant - preExisting: 10
- liverDisease - preExisting: 10

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
