import {
  parsePipelineConfig,
  PipelineConfig,
} from "../../src/task/parsePipelineConfig";
import { Pipeline } from "../../src/types/Pipeline";

describe("parsePipelineConfig", () => {
  it("parse config", () => {
    const config: Pipeline = {
      build: ["^build"],
      prepare: {
        dependencies: ["^prepare"],
        cache: false,
      },
      "weird-pkg#bundle": {
        dependencies: ["dep-pkg#build"],
        cache: false,
      },
    };
    const actual = parsePipelineConfig(config);
    const expected: PipelineConfig = {
      taskDeps: {
        build: {
          deps: [],
          topoDeps: ["build"],
          cache: true,
        },
        prepare: {
          deps: [],
          topoDeps: ["prepare"],
          cache: false,
        },
      },
      packageTaskDeps: [
        {
          to: "weird-pkg#bundle",
          from: "dep-pkg#build",
          cache: false,
        },
      ],
    };
    expect(actual).toEqual(expected);
  });
});
