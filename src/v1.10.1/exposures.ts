import { ScorableCollection } from './types';

export type Exposure = 'contact' | 'possibleContact' | 'noContact';

export const exposures: ScorableCollection<Exposure> = {
  key: 'exposures',
  label:
    'In the last 14 days, did you have close contact with someone with symptoms of COVID-19 or diagnosed with COVID-19?',
  items: [
    {
      key: 'contact',
      prompt: 'Yes',
      exposure: 30,
    },
    {
      key: 'noContact',
      prompt: 'No',
      aliases: [
        'In the last 14 days, have you been in contact with someone who has tested positive for Coronavirus (COVID-19)?',
      ],
      exposure: 0,
    },
    {
      key: 'possibleContact',
      prompt: "I Don't Know",
      aliases: [
        'In the last 14 days, have you been in contact with someone who may have Coronavirus (COVID-19)?',
      ],
      exposure: 10,
    },
  ],
};
