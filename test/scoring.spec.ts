import {
  calculate,
  DataToScore,
  emptyScore,
  ScoredData,
  LevelData,
} from '../src';

const padScore = (score?: number) =>
  score ? score.toString().padStart(3) : '  0';

const normalizeLevel = (level?: string) => {
  switch (level) {
    case 'veryLow':
      return 'VL';
    case 'low':
      return ' L';
    case 'medium':
      return ' M';
    case 'high':
      return ' H';
    case 'veryHigh':
      return 'VH';
    default:
      return 'UK';
  }
};

const emptyLevel: LevelData = {
  likelihood: 'veryLow',
  preExisting: 'low',
  exposure: 'low',
};

export const makeLabel = (
  data: DataToScore,
  expectScore: ScoredData,
  expectLevel: LevelData
) => {
  const {
    ages = [],
    symptoms = [],
    preExistingConditions = [],
    conditions = [],
    exposures = [],
  } = data;

  return (
    `(${padScore(expectScore.likelihood)}|` +
    `${padScore(expectScore.exposure)}|` +
    `${padScore(expectScore.preExisting)})` +
    `(${normalizeLevel(expectLevel.likelihood)}|` +
    `${normalizeLevel(expectLevel.exposure)}|` +
    `${normalizeLevel(expectLevel.preExisting)}) ` +
    [
      ...ages,
      ...symptoms,
      ...conditions,
      ...exposures,
      ...preExistingConditions,
    ]
      .sort()
      .join(', ')
  );
};

const assess = (
  data: DataToScore,
  expectScore?: ScoredData,
  expectLevel?: LevelData
) => {
  const overallScore = {
    ...emptyScore,
    ...expectScore,
  };
  const overallLevel = {
    ...emptyLevel,
    ...expectLevel,
  };
  it(makeLabel(data, overallScore, overallLevel), () => {
    expect(calculate(data)).toMatchObject({
      scores: overallScore,
      levels: overallLevel,
    });
  });
};

describe('Can calculate scores', () => {
  assess({}, {});

  assess(
    {
      ages: ['80-Infinity'],
    },
    { preExisting: 20 },
    { preExisting: 'medium' }
  );

  assess(
    {
      conditions: ['arouse'],
    },
    { likelihood: 40 },
    { likelihood: 'high' }
  );

  assess(
    {
      symptoms: ['bodyAches'],
    },
    {
      likelihood: 10,
    },
    {
      likelihood: 'low',
    }
  );

  assess(
    {
      symptoms: ['bodyAches'],
      conditions: ['chestPain'],
      preExistingConditions: ['diabetesType2'],
    },
    {
      likelihood: 50,
      preExisting: 20,
    },
    {
      likelihood: 'high',
      preExisting: 'medium',
    }
  );

  assess(
    {
      symptoms: ['bodyAches'],
      conditions: ['chestPain'],
      preExistingConditions: ['diabetesType1'],
      exposures: ['possibleContact'],
    },
    {
      likelihood: 50,
      preExisting: 10,
      exposure: 10,
    },
    {
      likelihood: 'high',
      preExisting: 'medium',
      exposure: 'medium',
    }
  );

  assess(
    {
      symptoms: ['bodyAches', 'chills', 'diarrhea', 'dizziness', 'fatigue'],
      conditions: ['chestPain', 'hardBreathing', 'arouse'],
      preExistingConditions: ['overweight', 'diabetesType1'],
      exposures: ['contact'],
    },
    {
      likelihood: 155,
      preExisting: 30,
      exposure: 30,
    },
    {
      likelihood: 'veryHigh',
      preExisting: 'high',
      exposure: 'high',
    }
  );
});
