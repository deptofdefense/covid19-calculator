import { ScorableCollection } from './types';

export type Symptom =
  | 'fever'
  | 'cough'
  | 'sob'
  | 'chestPain'
  | 'bodyAches'
  | 'fatigue'
  | 'headache'
  | 'diarrhea'
  | 'throat'
  | 'eyes'
  | 'lossOfSmell';

export const symptoms: ScorableCollection<Symptom> = [
  {
    key: 'fever',
    prompt: 'Fever',
    likelihood: 20,
  },
  {
    key: 'cough',
    prompt: 'Cough',
    likelihood: 20,
  },
  {
    key: 'sob',
    prompt: 'Shortness of breath',
    likelihood: 20,
  },
  {
    key: 'chestPain',
    prompt: 'Chest pain',
    likelihood: 20,
  },
  {
    key: 'diarrhea',
    prompt: 'Diarrhea',
    likelihood: 10,
  },
  {
    key: 'bodyAches',
    prompt: 'Body aches',
    likelihood: 15,
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
    key: 'fatigue',
    prompt: 'Fatigue',
    likelihood: 15,
  },
  {
    key: 'eyes',
    prompt: 'Itchy, red or pink eyes',
    likelihood: 10,
  },
  {
    key: 'lossOfSmell',
    prompt: 'Altered smell/taste',
    aliases: ['Loss of Smell'],
    likelihood: 10,
  },
];
