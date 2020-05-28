export type ScoreCategory = 'likelihood' | 'exposure' | 'preExisting';

export type ScoredData = Partial<Record<ScoreCategory, number>>;
export type LevelData = Partial<Record<ScoreCategory, string>>;

export interface ScorableItem<T> extends ScoredData {
  key: T;
  prompt: string;
}

export type ScorableCollection<T extends string> = ScorableItem<T>[];
