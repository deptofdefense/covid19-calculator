import { ScorableCollection } from './types';

export type Condition = 'arouse' | 'hardBreathing' | 'chestPain' | 'blueLips';

export const conditions: ScorableCollection<Condition> = [
  {
    key: 'arouse',
    prompt: 'Confusion or inability to wake / stay awake',
    aliases: ['New confusion or inability to arouse'],
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
    prompt: 'Bluish lips or face',
    likelihood: 40,
  },
];
