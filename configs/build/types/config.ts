export type BuildMode = 'production' | 'development';

export interface BuildPaths {
  entry: string;
  build: string;
  html: string;
  src: string;
  assets: string;
  assetsBuild: string;
  envPath: string;
}

export interface BuildEnv {
  mode: BuildMode;
  modeDebug: boolean;
  port: number;
}

export interface BuildOptions {
  mode: BuildMode;
  paths: BuildPaths;
  isDev: boolean;
  isDevDebug: boolean;
  port: number;
  project: 'storybook' | 'frontend' | 'jest';
}
