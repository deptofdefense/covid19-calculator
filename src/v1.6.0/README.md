# Version 1.6.0 - 6/30/2020

## Medical Discussion

- CDC now includes nausea along with vomiting as a noted symptom. Congestion or runny nose is also noted. Both are scored at a +5 because they are not on the same scale as commonly noted symptoms and conditions that are currently scored higher.
- Additionally, although dizziness and lightheadedness are not listed anymore on the site, CDC still includes it in their daily symptom checker. Therefore, we have decided that this will also be kept on our checker.
- Red, pink eyes taken out since CDC no longer has this as a symptom.

### Symptoms Added

- Congestion or runny nose +5

### Symptoms Changed

- Nausea or vomiting +5 (previously was just "Vomiting")

### Symptoms Removed

- Itchy, red or pink eyes +5

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
- congestion - likelihood: 5

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
