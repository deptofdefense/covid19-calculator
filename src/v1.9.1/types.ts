export type ScoreCategory = 'likelihood' | 'exposure' | 'preExisting';

export type ScoredData = Partial<Record<ScoreCategory, number>>;
export type LevelData = Partial<Record<ScoreCategory, string>>;

export interface ScorableItem<T> extends ScoredData {
  key: T;
  prompt: string;
  aliases?: string[];
}

export interface ScorableCollection<T extends string> {
  label: string;
  key: string;
  items: ScorableItem<T>[];
}
