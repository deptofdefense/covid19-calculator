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
