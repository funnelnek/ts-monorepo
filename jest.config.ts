import type { JestConfigWithTsJest } from 'ts-jest';
import { pathsToModuleNameMapper } from 'ts-jest';
import { compilerOptions } from './tsconfig.json' assert { type: "json" };


const config: JestConfigWithTsJest = {
  verbose: false,
  coverageDirectory: "test/coverage",
  collectCoverage: true,
  cacheDirectory: "test/cache",
  moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths, { prefix: "./packages" }),
  transform: {
    '^.+\\.tsx?$': ["ts-jest", { tsconfig: "tsconfig.spec.json" }]
  }
};

export default config;