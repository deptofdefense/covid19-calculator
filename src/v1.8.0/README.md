# Version 1.8.0 - 9/15/2020

## Medical Discussion

- This version contains mostly a change in wording to make it more clear what is being asked as it relates to exposure.
- In order to be able to be more clear about quetsions, a label has been added to each set of options to provide developers a stronger guide on how options are intented to be used.

### Exposures Changed

- In the last 14 days, did you have close contact with someone with symptoms of COVID-19 or diagnosed with COVID-19?
  - contact - Yes +30
  - possibleContact - I Don't Know +10
  - noContact - No +0

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
  - fever - Fever - likelihood: 10
  - bodyAches - Body aches or muscle pain - likelihood: 10
  - headache - Headache - likelihood: 10
  - throat - Sore throat - likelihood: 10
  - chills - Chills or repeated shaking with chills - likelihood: 10
  - lossOfSmell - Altered smell/taste - likelihood: 10
  - vomiting - Nausea or vomiting (aliases: Vomiting) - likelihood: 5
  - dizziness - Dizziness or lightheadedness - likelihood: 5
  - diarrhea - Diarrhea - likelihood: 5
  - fatigue - Fatigue - likelihood: 5
  - congestion - Congestion or runny nose - likelihood: 5

#### Conditions

- Select current conditions:
  - arouse - Confusion or inability to wake / stay awake (aliases: New confusion or inability to arouse) - likelihood: 40
  - hardBreathing - Trouble or difficulty breathing - likelihood: 40
  - chestPain - Persistent pain or pressure in the chest - likelihood: 40
  - blueLips - Bluish lips or face - likelihood: 40

#### Pre-existing Conditions

- Select pre-existing conditions:
  - asthma - Are you a smoker, have asthma, cystic fibrosis, COPD, or emphysema? - preExisting: 20
  - diabetes - Do you have diabetes?- preExisting: 20
  - heartDisease - Do you have heart disease, heart failure, or coronary artery disease? - preExisting: 20
  - hemodialysis - Are you on hemodialysis? - preExisting: 20
  - chemotherapy - Are you on chemotherapy or chemoradiation? - preExisting: 20
  - transplant - Did you have organ an transplant or bone marrow transplant? - preExisting: 20
  - sickleCellDisease - Do you have sickle cell disease, HIV, or AIDS? - preExisting: 20
  - steroids - Do you take regular corticosteroids, or other immune weakening medications? - preExisting: 20
  - otherConditions - Do you have a compromised immune system? - preExisting: 20
  - overweight - Are you very overweight (Body Mass Index (BMI) of 40 or higher)? - preExisting: 10
  - weakMuscles - Do you have an illness that makes your muscles feel weak? - preExisting: 10
  - difficultyThinking - Do you have dementia, stroke, seizures, or brain injury? - preExisting: 10
  - pregnant - Are you pregnant or recently pregnant? - preExisting: 10
  - liverDisease - Do you have liver cirrhosis or liver disease? - preExisting: 10

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
