# Version 1.4.0 - 5/1/2020

## Medical Discussion

This change in scoring takes into account the increase in seasonal allergy symptoms among the users. The goal for this version is to balance between creating unnecessary and not enough alarm. It was later determined that symptoms that strongly indicate allergy symptoms should have their points lowered just enough so if someone with allergies was taking the checker, they do not end up in the medium category solely with symptoms that could potentially indicate allergies.

The change also increased the maximum individual scoring from 20 to 40 in order to take into account the symptoms that do not overlap with allergy symptoms and are still considered emergency warning signs that require immediate attention.

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
- sob - likelihood: 20
- cough - likelihood: 10
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
