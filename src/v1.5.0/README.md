# Version 1.5.0 - 6/30/2020

## Medical Discussion

On 6/30/2020 it was noticed that the value of cough and fever had been swapped unintentionally. This version corrects that error.

- fever - likelihood +20 -> +10
- cough - likelihood +10 -> +20

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

- cough - likelihood: 20
- sob - likelihood: 20
- fever - likelihood: 10
- bodyAches - likelihood: 10
- headache - likelihood: 10
- throat - likelihood: 10
- lossOfSmell - likelihood: 10
- chills - likelihood: 10
- vomiting - likelihood: 5
- dizziness - likelihood: 5
- diarrhea - likelihood: 5
- fatigue - likelihood: 5
- eyes - likelihood: 5

#### Conditions

- arouse - likelihood: 40
- hardBreathing - likelihood: 40
- chestPain - likelihood: 40
- blueLips - likelihood: 40

#### Pre-existing Conditions

- asthma - preExisting: 20
- diabetes - preExisting: 20
- heartDisease - preExisting: 20
- hemodialysis - preExisting: 20
- chemotherapy - preExisting: 20
- transplant - preExisting: 20
- sickleCellDisease - preExisting: 20
- steroids - preExisting: 20
- otherConditions- preExisting: 20
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
