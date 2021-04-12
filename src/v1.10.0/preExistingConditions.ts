import { ScorableCollection } from './types';

export type PreExistingCondition =
  | 'diabetesType2'
  | 'heartDisease'
  | 'cancer'
  | 'kidneyDisease'
  | 'copd'
  | 'organTransplant'
  | 'sickleCellDisease'
  | 'overweight'
  | 'asthma'
  | 'smoke'
  | 'steroids'
  | 'pregnant'
  | 'cerebrovascular'
  | 'hypertension'
  | 'diabetesType1'
  | 'lungDisease'
  | 'thalassemia'
  | 'neurologicCondition'
  | 'liverDisease'
  | 'compromisedImmuneSystem'
  | 'hiv'
  | 'boneMarrowTransplant';

export const preExistingConditions: ScorableCollection<PreExistingCondition> = {
  key: 'preExistingConditions',
  label: 'Select pre-existing conditions:',
  items: [
    {
      key: 'diabetesType2',
      prompt: 'Type 2 diabetes mellitus',
      aliases: ['Do you have diabetes?'],
      preExisting: 20,
    },
    {
      key: 'heartDisease',
      prompt:
        'Heart conditions, such as heart failure, coronary artery disease, or cardiomyopathies',
      aliases: [
        'Do you have heart disease, heart failure, or coronary artery disease?',
      ],
      preExisting: 20,
    },
    {
      key: 'cancer',
      prompt: 'Cancer',
      aliases: ['Are you on chemotherapy or chemoradiation?'],
      preExisting: 20,
    },
    {
      key: 'kidneyDisease',
      prompt: 'Chronic kidney disease',
      aliases: ['Are you on hemodialysis?'],
      preExisting: 20,
    },
    {
      key: 'copd',
      prompt: 'COPD',
      aliases: [
        'Are you a smoker, have asthma, cystic fibrosis, COPD, or emphysema?',
      ],
      preExisting: 20,
    },
    {
      key: 'organTransplant',
      prompt: 'Had a solid organ transplant',
      aliases: ['Did you have organ an transplant or bone marrow transplant?'],
      preExisting: 20,
    },
    {
      key: 'sickleCellDisease',
      prompt: 'Sickle cell disease',
      aliases: ['Do you have sickle cell disease, HIV, or AIDS?'],
      preExisting: 20,
    },
    {
      key: 'overweight',
      prompt: 'Very overweight (Body Mass Index (BMI) of 30 or higher)',
      aliases: [
        'Are you very overweight (Body Mass Index (BMI) of 40 or higher)?',
      ],
      preExisting: 20,
    },
    {
      key: 'asthma',
      prompt: 'Asthma',
      preExisting: 15,
    },
    {
      key: 'smoke',
      prompt: 'Currently smoking',
      preExisting: 15,
    },
    {
      key: 'steroids',
      prompt: 'Take corticosteroids or other immunosuppressive medications',
      aliases: [
        'Do you take regular corticosteroids, or other immune weakening medications?',
      ],
      preExisting: 15,
    },
    {
      key: 'pregnant',
      prompt: 'Pregnant',
      aliases: ['Are you pregnant or recently pregnant?'],
      preExisting: 15,
    },
    {
      key: 'cerebrovascular',
      prompt: 'Cerebrovascular disease',
      preExisting: 15,
    },
    {
      key: 'hypertension',
      prompt: 'Hypertension',
      preExisting: 15,
    },
    {
      key: 'diabetesType1',
      prompt: 'Type 1 diabetes',
      preExisting: 10,
    },
    {
      key: 'lungDisease',
      prompt: 'Cystic fibrosis, emphysema, or other chronic lung diseases',
      preExisting: 10,
    },
    {
      key: 'thalassemia',
      prompt: 'Thalassemia',
      preExisting: 10,
    },
    {
      key: 'neurologicCondition',
      prompt: 'Neurologic conditions',
      aliases: [
        'Do you have dementia, stroke, seizures, or brain injury?',
        'Do you have an illness that makes your muscles feel weak?',
      ],
      preExisting: 10,
    },
    {
      key: 'liverDisease',
      prompt: 'Liver disease',
      aliases: ['Do you have liver cirrhosis or liver disease?'],
      preExisting: 10,
    },
    {
      key: 'compromisedImmuneSystem',
      prompt: 'Compromised immune system',
      aliases: ['Do you have a compromised immune system?'],
      preExisting: 10,
    },
    {
      key: 'hiv',
      prompt: 'HIV',
      preExisting: 10,
    },
    {
      key: 'boneMarrowTransplant',
      prompt: 'Had a bone marrow transplant',
      preExisting: 10,
    },
  ],
};
