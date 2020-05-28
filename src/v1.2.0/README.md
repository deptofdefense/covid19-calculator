# Version 1.2.0 - 4/8/2020

## Medical Discussion

When in some sort of combination, the symptoms body aches, headache and sore throat, have a higher indicator of COVID-19 likelihood. Increasing all these points to the maximum takes into account the importance of viewing these specific symptoms in combination with each other, along with the already high points given to fever, cough, shortness of breath, chest pain, and diarrhea.

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
