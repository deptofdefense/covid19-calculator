# Version 1.9.0 - 9/22/2020

## Medical Discussion

- The pointage for fever has been elevated by 10 points. There is a high prevalence of fever in recently reported literature. In five studies, an average of 80% of patients that tested positive reported fever as a symptom.
- Many studies were evaluated by CDC and discussed here: https://www.cdc.gov/coronavirus/2019-ncov/need-extra-precautions/evidence-table.html.
  The current changes reflect the separation of many pre-conditions into distinct categories. For instance, asthma and smoking are now in separate categories, as having asthma and being a smoker do not necessarily occur in combination. The changes in wording reflect the current wording used by the CDC.

### Symptoms Changed

- fever - Fever - likelihood: 10 -> 20

### Pre-Existing Conditions (new)

Pre-existing conditions have been split into more options. Overall the options have not changed much but they are no longer grouped. The new options are listed here:

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
