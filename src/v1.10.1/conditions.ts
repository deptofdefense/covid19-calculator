import { ScorableCollection } from './types';

export type Condition = 'arouse' | 'hardBreathing' | 'chestPain' | 'blueLips';

export const conditions: ScorableCollection<Condition> = {
  key: 'conditions',
  label: 'Select current conditions:',
  items: [
    {
      key: 'arouse',
      prompt: 'Disoriented or inability to wake/stay awake (worse than sleepy)',
      aliases: [
        'New confusion or inability to arouse',
        'Confusion or inability to wake / stay awake',
      ],
      likelihood: 40,
    },
    {
      key: 'hardBreathing',
      prompt: 'Trouble or difficulty breathing',
      likelihood: 40,
    },
    {
      key: 'chestPain',
      prompt: 'Persistent pain or pressure in the chest',
      likelihood: 40,
    },
    {
      key: 'blueLips',
      prompt: 'Pale, gray, or blue-colored skin, lips, or nail beds',
      likelihood: 40,
    },
  ],
};
