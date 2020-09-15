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
  | 'lossOfSmell'
  | 'chills'
  | 'vomiting'
  | 'dizziness'
  | 'congestion';

export const symptoms: ScorableCollection<Symptom> = {
  key: 'symptoms',
  label: 'Select your current symptoms:',
  items: [
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
      key: 'fever',
      prompt: 'Fever',
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
      prompt: 'Nausea or vomiting',
      aliases: ['Vomiting'],
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
      key: 'congestion',
      prompt: 'Congestion or runny nose',
      likelihood: 5,
    },
  ],
};
