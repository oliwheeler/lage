export interface Pipeline {
  [task: string]: TaskDependencies;
}

export type TaskDependencies = ShortHandConfig | FullConfig;

export type ShortHandConfig = string[];

export type FullConfig = { dependencies: string[]; cache: boolean };

export type Pipelines = Map<string, Pipeline>;
