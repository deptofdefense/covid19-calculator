import { ScorableCollection } from './types';

export type Exposure = 'travelCountry' | 'travelState' | 'outsideContact';

export const exposures: ScorableCollection<Exposure> = [
  {
    key: 'travelCountry',
    prompt:
      'Have you traveled back from another country within the last two weeks with an outbreak of Coronavirus (COVID-19)?',
    exposure: 10,
  },
  {
    key: 'travelState',
    prompt:
      'Are you located in or have visited an area where a lot of Coronavirus (COVID‑19) infections have been reported?',
    exposure: 10,
  },
  {
    key: 'outsideContact',
    prompt:
      'Have you been in contact with someone who tested positive for Coronavirus (COVID-19)?',
    exposure: 30,
  },
];
