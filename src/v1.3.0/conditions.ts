import { ScorableCollection } from './types';

export type Condition =
  | 'hardBreathing'
  | 'throwingUp'
  | 'confusion'
  | 'dizziness'
  | 'worseningSymptoms'
  | 'blueLips'
  | 'arouse';

export const conditions: ScorableCollection<Condition> = [
  {
    key: 'hardBreathing',
    prompt: 'Difficulty breathing',
    likelihood: 20,
  },
  {
    key: 'throwingUp',
    prompt: 'Vomiting',
    likelihood: 20,
  },
  {
    key: 'confusion',
    prompt: 'Confusion or trouble staying awake',
    likelihood: 20,
  },
  {
    key: 'blueLips',
    prompt: 'Bluish lips or face',
    likelihood: 20,
  },
  {
    key: 'arouse',
    prompt: 'Inability to arouse',
    likelihood: 20,
  },
  {
    key: 'dizziness',
    prompt: 'Dizziness or lightheadedness',
    likelihood: 10,
  },
  {
    key: 'worseningSymptoms',
    prompt: 'Worsening fever or cough',
    likelihood: 20,
  },
];
