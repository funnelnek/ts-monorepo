import type { JestConfigWithTsJest } from 'ts-jest';
import { pathsToModuleNameMapper } from 'ts-jest';
import { compilerOptions } from './tsconfig.json';

const config: JestConfigWithTsJest = {
  verbose: false,
  coverageDirectory: "test/coverage",
  collectCoverage: true,
  cacheDirectory: "test/cache",
  moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths, { prefix: "./packages" })
};

export default config;