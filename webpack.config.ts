import path from 'path';
import dotenv from 'dotenv';
import webpack from 'webpack';
import { buildWebpackConfig } from './configs/build/buildWebpackConfig';
import { BuildEnv, BuildPaths } from './configs/build/types/config';

export default (env: BuildEnv) => {
  const paths: BuildPaths = {
    assets: path.resolve(__dirname, 'public', 'assets'),
    assetsBuild: path.resolve(__dirname, 'build', 'assets'),
    build: path.resolve(__dirname, 'build'),
    entry: path.resolve(__dirname, 'src', 'index.ts'),
    envPath: path.resolve(__dirname, '.env'),
    html: path.resolve(__dirname, 'public', 'index.html'),
    src: path.resolve(__dirname, 'src'),
  };

  // initialization config for dotenv
  dotenv.config().parsed || {};

  const mode = env.mode || 'development';
  const PORT = env.port || 3000;

  const isDev = mode === 'development';
  const isDevDebug = Boolean(JSON.stringify(env?.modeDebug)) || false;

  const config: webpack.Configuration = buildWebpackConfig({
    isDev,
    isDevDebug,
    mode,
    paths,
    port: PORT,
    project: 'frontend',
  });

  return config;
};
