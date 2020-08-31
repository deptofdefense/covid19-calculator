import { ScorableCollection } from './types';

export type Exposure = 'contact' | 'possibleContact';

export const exposures: ScorableCollection<Exposure> = [
  {
    key: 'contact',
    prompt:
      'In the last 14 days, have you been in contact with someone who has tested positive for Coronavirus (COVID-19)?',
    exposure: 30,
  },
  {
    key: 'possibleContact',
    prompt:
      'In the last 14 days, have you been in contact with someone who may have Coronavirus (COVID-19)?',
    exposure: 10,
  },
];
