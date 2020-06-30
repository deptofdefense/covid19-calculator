import { ScorableCollection } from './types';

export type PreExistingCondition =
  | 'asthma'
  | 'overweight'
  | 'diabetes'
  | 'heartDisease'
  | 'liverDisease'
  | 'hemodialysis'
  | 'chemotherapy'
  | 'transplant'
  | 'sickleCellDisease'
  | 'steroids'
  | 'weakMuscles'
  | 'difficultyThinking'
  | 'pregnant'
  | 'otherConditions';

export const preExistingConditions: ScorableCollection<PreExistingCondition> = [
  {
    key: 'asthma',
    prompt:
      'Are you a smoker, have asthma, cystic fibrosis, COPD, or emphysema?',
    preExisting: 20,
  },
  {
    key: 'diabetes',
    prompt: 'Do you have diabetes?',
    preExisting: 20,
  },
  {
    key: 'heartDisease',
    prompt:
      'Do you have heart disease, heart failure, or coronary artery disease?',
    preExisting: 20,
  },
  {
    key: 'hemodialysis',
    prompt: 'Are you on hemodialysis?',
    preExisting: 20,
  },
  {
    key: 'chemotherapy',
    prompt: 'Are you on chemotherapy or chemoradiation?',
    preExisting: 20,
  },
  {
    key: 'transplant',
    prompt: 'Did you have organ an transplant or bone marrow transplant?',
    preExisting: 20,
  },
  {
    key: 'sickleCellDisease',
    prompt: 'Do you have sickle cell disease, HIV, or AIDS?',
    preExisting: 20,
  },
  {
    key: 'steroids',
    prompt:
      'Do you take regular corticosteroids, or other immune weakening medications?',
    preExisting: 20,
  },
  {
    key: 'otherConditions',
    prompt: 'Do you have a compromised immune system?',
    preExisting: 20,
  },
  {
    key: 'overweight',
    prompt: 'Are you very overweight (Body Mass Index (BMI) of 40 or higher)?',
    preExisting: 10,
  },
  {
    key: 'weakMuscles',
    prompt: 'Do you have an illness that makes your muscles feel weak?',
    preExisting: 10,
  },
  {
    key: 'difficultyThinking',
    prompt: 'Do you have dementia, stroke, seizures, or brain injury?',
    preExisting: 10,
  },
  {
    key: 'pregnant',
    prompt: 'Are you pregnant or recently pregnant?',
    preExisting: 10,
  },
  {
    key: 'liverDisease',
    prompt: 'Do you have liver cirrhosis or liver disease?',
    preExisting: 10,
  },
];
