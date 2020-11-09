import { Pipeline, ShortHandConfig, TaskDependencies } from "../types/Pipeline";

const DELIMITER = "#";

export interface PipelineConfig {
  taskDeps: {
    [taskName: string]: {
      deps: string[];
      topoDeps: string[];
      cache: boolean;
    };
  };
  packageTaskDeps: { from: string; to: string; cache: boolean }[];
}

export function parsePipelineConfig(pipeline: Pipeline) {
  const pipelineConfig: PipelineConfig = {
    taskDeps: {},
    packageTaskDeps: [],
  };
  for (const [taskName, taskDeps] of Object.entries(pipeline)) {
    const declaredDependencies = isShorthand(taskDeps)
      ? taskDeps
      : taskDeps.dependencies;
    const cache = isShorthand(taskDeps) ? true : taskDeps.cache;
    if (taskName.includes(DELIMITER)) {
      const to = taskName;
      for (const from of declaredDependencies) {
        if (!from.includes(DELIMITER)) {
          throw new Error(
            "Pipeline config error: single package task dependencies must be other individual package tasks, currently"
          );
        }

        if (from && to) {
          pipelineConfig.packageTaskDeps.push({ from, to, cache });
        }
      }
    } else {
      const deps = declaredDependencies.filter((dep) => !dep.startsWith("^"));
      const topoDeps = declaredDependencies
        .filter((dep) => dep.startsWith("^"))
        .map((dep) => dep.slice(1));

      pipelineConfig.taskDeps[taskName] = {
        deps,
        topoDeps,
        cache,
      };
    }
  }

  return pipelineConfig;
}

const isShorthand = (
  taskDependencies: TaskDependencies
): taskDependencies is ShortHandConfig => {
  return Array.isArray(taskDependencies);
};
