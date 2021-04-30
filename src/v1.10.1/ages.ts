import { ScorableCollection } from './types';

export type Age =
  | '0-17'
  | '18-39'
  | '40-64'
  | '65-69'
  | '70-79'
  | '80-Infinity';

export const ages: ScorableCollection<Age> = {
  key: 'ages',
  label: "What's your age (in years)?",
  items: [
    { prompt: '0-17', key: '0-17', preExisting: 0 },
    { prompt: '18-39', key: '18-39', preExisting: 0 },
    { prompt: '40-64', key: '40-64', preExisting: 0 },
    { prompt: '65-69', key: '65-69', preExisting: 10 },
    { prompt: '70-79', key: '70-79', preExisting: 15 },
    { prompt: '80+', key: '80-Infinity', preExisting: 20 },
  ],
};
