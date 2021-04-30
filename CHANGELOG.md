# Change Log

<!--
Please use the following format for version changes
## [VERSION] - DATE

### Added

### Changed

### Removed

### Fixed

For more details see the specific version's [README](https://github.com/deptofdefense/covid19-calculator/blob/master/src/{{VERSION}}/README.md)

-->

## 1.4.0 - 4/27/2021

Small change to the description blueLips

### Changes

- blueLips - 'Bluish lips or face' +10 -> 'Pale, gray, or blue-colored skin, lips, or nail beds '

For more details see the specific version's [README](https://github.com/deptofdefense/covid19-calculator/blob/master/src/v1.10.1/README.md)

## 1.3.0 - 4/13/2021

Small change to the description and pointing of lossOfSmell

### Changes

- lossOfSmell - 'Altered smell/taste' +10 -> 'New loss of taste or smell' +20

For more details see the specific version's [README](https://github.com/deptofdefense/covid19-calculator/blob/master/src/v1.10.0/README.md)

## 1.2.0 - 11/5/2020

Small change to the description of arouse

### Changes

- arouse - 'Confusion or inability to wake / stay awake' -> 'Disoriented or inability to wake/stay awake (worse than sleepy)'

For more details see the specific version's [README](https://github.com/deptofdefense/covid19-calculator/blob/master/src/v1.9.1/README.md)

## 1.1.0 - 9/22/2020

Adjustments have been made in accordnace with recent studies.

### Changes

Symptoms:

- (Changed) fever - Fever +10 -> +20

Pre-Existing Conditions:

Across the board pre-exisitng conditions have been split apart. These are all marked as change because they all map back to a previous pre-existing condition.

- (Changed) diabetesType2 - Type 2 diabetes mellitus - preExisting: 20
- (Changed) heartDisease - Heart conditions, such as heart failure, coronary artery disease, or cardiomyopathies - preExisting: 20
- (Changed) cancer - Cancer - preExisting: 20
- (Changed) kidneyDisease - Chronic kidney disease - preExisting: 20
- (Changed) copd - COPD - preExisting: 20
- (Changed) organTransplant - Had a solid organ transplant - preExisting: 20
- (Changed) sickleCellDisease - Sickle cell disease - preExisting: 20
- (Changed) overweight - Very overweight (Body Mass Index (BMI) of 30 or higher) - preExisting: 20
- (Changed) asthma - Asthma - preExisting: 15
- (Changed) smoke - Currently smoking - preExisting: 15
- (Changed) steroids - Take corticosteroids or other immunosuppressive medications - preExisting: 15
- (Changed) pregnant - Pregnant - preExisting: 15
- (Changed) cerebrovascular - Cerebrovascular disease - preExisting: 15
- (Changed) hypertension - Hypertension - preExisting: 15
- (Changed) diabetesType1 - Type 1 diabetes - preExisting: 10
- (Changed) lungDisease - Cystic fibrosis, emphysema, or other chronic lung diseases - preExisting: 10
- (Changed) thalassemia - Thalassemia - preExisting: 10
- (Changed) neurologicCondition - Neurologic conditions - preExisting: 10
- (Changed) liverDisease - Liver disease - preExisting: 10
- (Changed) compromisedImmuneSystem - Compromised immune system - preExisting: 10
- (Changed) hiv - HIV - preExisting: 10
- (Changed) boneMarrowTransplant - Had a bone marrow transplant - preExisting: 10

For more details see the specific version's [README](https://github.com/deptofdefense/covid19-calculator/blob/master/src/v1.9.0/README.md)

## 1.0.0 - 9/15/2020

### BREAKING CHANGES

All options now have a slightly different shape and include a label. This label is intented to provide more information on how the options are intended to be used and also solves the problem of trying to have a one of option. To access the same information, use the `items` key inside of each `ages`, `symptoms`, `conditions`, etc.

#### Previously

```
export const ages: ScorableCollection<Age> = [
  { prompt: '0-17', key: '0-17', preExisting: 0 },
  { prompt: '18-39', key: '18-39', preExisting: 0 },
  { prompt: '40-64', key: '40-64', preExisting: 0 },
  { prompt: '65-69', key: '65-69', preExisting: 10 },
  { prompt: '70-79', key: '70-79', preExisting: 15 },
  { prompt: '80+', key: '80-Infinity', preExisting: 20 },
];
```

#### Now

```
export const ages: ScorableCollection<Age> = {
  key: 'ages',
  label: "What's your age (in years)?",
  items: [
    { prompt: '0-17', key: '0-17', preExisting: 0 },
    { prompt: '18-39', key: '18-39', preExisting: 0 },
    { prompt: '40-64', key: '40-64', preExisting: 0 },
    { prompt: '65-69', key: '65-69', preExisting: 10 },
    { prompt: '70-79', key: '70-79', preExisting: 15 },
    { prompt: '80+', key: '80-Infinity', preExisting: 20 },
  ],
};
```

### Changes

Calulcator version 1.8.0 includes wording changes to exopsure questions and 1.7.0 wording was added as in aliases.

- In the last two weeks, did you care for or have close contact (within 6 feet of an infected person for at least 15 minutes) with someone with symptoms of COVID-19, tested for COVID-19, or diagnosed with COVID-19?
  - contact - Yes - exposure: 30
  - possibleContact - I Don't Know - exposure: 10
  - noContact - No - exposure: 0

For more details see the specific version's [README](https://github.com/deptofdefense/covid19-calculator/blob/master/src/v1.8.0/README.md)

## 0.6.0 - 8/31/2020

### Changes

Calulcator version 1.7.0 includes updates to exopsure questions.

- (Added) New questions asking more directly about exposure to someone with COVID-19.
- (Removed) The three previous travel questions

For more details see the specific version's [README](https://github.com/deptofdefense/covid19-calculator/blob/master/src/v1.7.0/README.md)

## 0.5.1 - 7/30/2020

### Fixed

Calculator version 1.6.0 was previously reporting a `calculatorVersion` of `'1.5.0'`. This has been resolved.

## 0.5.0 - 7/8/2020

### Changes

Calculator version 1.6.0 includes updates based on recent CDC updated recommendations. 1.6.0 includes the following:

- (Added) Congestion or runny nose +5
- (Changed) Nausea or vomiting +5 (previously was just "Vomiting")
- (Removed) Itchy, red or pink eyes +5

## 0.4.0 - 7/2/2020

### Changes

On 6/30/2020 it was noticed that the value of cough and fever had been swapped unintentionally. Calculator version 1.5.0 was added to resolve this.

- fever 20 -> 10
- cough 10 -> 20

## 0.3.1 - 6/30/2020

### Added

Both of these will allow for better tracking of data collected based on what version (both package and calculator) is in use.

- `packageVersion` at the top level indicates the current package version
- `calculatorVersion` at each version level indicates the calculator version.

## 0.3.0 - 6/2/2020

### Fixed

- Typo `PreExsitingCondition` -> `PreExistingCondition` 🤦

## 0.2.0 - 6/1/2020

### Fixed

- `calculateScores` now includes `ages`
- `calculateLevel` now uses a level's value as an includive lower bound. Ex. `['low', 10]` means that a `score = 10` is labeled as `low` where previously it would have been labeled as `veryLow`.
- `calculateScore` api has been updated in all calculator versions prior to calculator version `v1.4.0`

## 0.1.0 Initial Package Release - 5/28/2020

Below are notes about the different model versions. Moving forward these changes will be noted as the package is update. This is left here as a quick overview of the differences in each calculator version prior to open beta release.

### 1.4.0 - 5/1/2020

#### Added

Symptoms:

- dizziness - likelihood: 5

Conditions:

- chestPain - likelihood: 40

#### Changed

Symptoms:

- cough - likelihood: 10 (decreased by 10)
- bodyAches - likelihood: 10 (decreased by 10)
- headache - likelihood: 10 (decreased by 10)
- throat - likelihood: 10 (decreased by 10)
- lossOfSmell - likelihood: 10 (increased by 5)
- chills - likelihood: 10 (increased by 5)
- diarrhea - likelihood: 5 (decreased by 15)
- fatigue - likelihood: 5 (decreased by 10)
- eyes - likelihood: 5 (decreased by 5)

Conditions:

- hardBreathing - likelihood: 40 (increased by 20)
- blueLips - likelihood: 40 (increased by 20)
- arouse - likelihood: 40 (increased by 20)

#### Removed

Symptoms:

- chestPain
- vomiting

Conditions:

- throwingUp
- confusion
- dizziness
- worseningSymptoms

For more details see the specific version's [README](https://github.com/deptofdefense/covid19-calculator/blob/master/src/v1.4.0/README.md)

Following this version, the guiding rules described in [CONTRIBUTING.md](https://github.com/deptofdefense/covid19-calculator/blob/master/CONTRIBUTING.md) will be used when determining future version numbers.

### 1.3.0 - 4/28/2020

#### Added

Symptoms:

- chills - likelihood: 5

Conditions:

- blueLips - likelihood: 20
- arouse - likelihood: 20

For more details see the specific version's [README](https://github.com/deptofdefense/covid19-calculator/blob/master/src/v1.3.0/README.md)

### 1.2.0 - 4/8/2020

#### Changed

Symptoms:

Increased likelihood points for a few:

- bodyAches - likelihood: 20 (increased by 5)
- headache - likelihood: 20 (increased by 10)
- throat - likelihood: 20 (increased by 10)

For more details see the specific version's [README](https://github.com/deptofdefense/covid19-calculator/blob/master/src/v1.2.0/README.md)

### 1.1.0 - 4/7/2020

#### Changed

Likelihood Scale:

The scoring system was made more sensitive.

- veryLow: 0-9 (same)
- low: 10-19 (upper bound decreased by 10)
- medium: 20-39 (range decreased by 10)
- high: 40-69 (range decreased by 10)
- veryHigh: 70+ (range decreased by 10)

For more details see the specific version's [README](https://github.com/deptofdefense/covid19-calculator/blob/master/src/v1.1.0/README.md)

### 1.0.0 - 4/3/2020

This initial version was based on conversations with Department of Defense medical professionals. The scores were based on the best available information at the time.

For more details see the specific version's [README](https://github.com/deptofdefense/covid19-calculator/blob/master/src/v1.0.0/README.md)
