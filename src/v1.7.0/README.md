# Version 1.7.0 - 8/31/2020

## Medical Discussion

- There have been travel restrictions in place. In order to reflect the minimal amount of traveling taking place, the calculator has been updated to no longer ask about travels.
- Along a similar note, since social gatherings and public functions are increasing, the checker will contain focused exposure questions.

### Exposures Added

- contact - In the last 14 days, have you been in contact with someone who has tested positive for Coronavirus (COVID-19)? +30
- possibleContact - In the last 14 days, have you been in contact with someone who may have Coronavirus (COVID-19)? +10

### Exposures Removed

- travelCountry - Have you traveled back from another country within the last two weeks with an outbreak of Coronavirus (COVID-19)? +10
- travelState - Are you located in or have you visited an area where a lot of Coronavirus (COVID‑19) infections have been reported? +10
- outsideContact - Have you been in contact with someone who tested positive for Coronavirus (COVID-19)? +30

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

- contact - In the last 14 days, have you been in contact with someone who has tested positive for Coronavirus (COVID-19)? - exposure: 30
- possibleContact - In the last 14 days, have you been in contact with someone who may have Coronavirus (COVID-19)? - exposure: 10

#### Symptoms

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

- arouse - Confusion or inability to wake / stay awake (aliases: New confusion or inability to arouse) - likelihood: 40
- hardBreathing - Trouble or difficulty breathing - likelihood: 40
- chestPain - Persistent pain or pressure in the chest - likelihood: 40
- blueLips - Bluish lips or face - likelihood: 40

#### Pre-existing Conditions

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
