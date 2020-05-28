import { ScorableCollection } from './types';

export type Symptom =
  | 'fever'
  | 'sob'
  | 'cough'
  | 'bodyAches'
  | 'fatigue'
  | 'headache'
  | 'diarrhea'
  | 'throat'
  | 'eyes'
  | 'lossOfSmell'
  | 'chills'
  | 'vomiting'
  | 'dizziness';

export const symptoms: ScorableCollection<Symptom> = [
  {
    key: 'fever',
    prompt: 'Fever',
    likelihood: 20,
  },
  {
    key: 'sob',
    prompt: 'Shortness of breath',
    likelihood: 20,
  },
  {
    key: 'cough',
    prompt: 'Cough',
    likelihood: 10,
  },
  {
    key: 'bodyAches',
    prompt: 'Body aches or muscle pain',
    likelihood: 10,
  },
  {
    key: 'headache',
    prompt: 'Headache',
    likelihood: 10,
  },
  {
    key: 'throat',
    prompt: 'Sore throat',
    likelihood: 10,
  },
  {
    key: 'chills',
    prompt: 'Chills or repeated shaking with chills',
    likelihood: 10,
  },
  {
    key: 'lossOfSmell',
    prompt: 'Altered smell/taste',
    likelihood: 10,
  },
  {
    key: 'vomiting',
    prompt: 'Vomiting',
    likelihood: 5,
  },
  {
    key: 'dizziness',
    prompt: 'Dizziness or lightheadedness',
    likelihood: 5,
  },
  {
    key: 'diarrhea',
    prompt: 'Diarrhea',
    likelihood: 5,
  },
  {
    key: 'fatigue',
    prompt: 'Fatigue',
    likelihood: 5,
  },
  {
    key: 'eyes',
    prompt: 'Itchy, red, or pink eyes',
    likelihood: 5,
  },
];
