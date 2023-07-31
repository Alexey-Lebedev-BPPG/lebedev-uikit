import { ResolveOptions } from 'webpack';
import { BuildOptions } from './types/config';

export const buildResolvers = (options: BuildOptions): ResolveOptions => ({
  alias: {
    '@': options.paths.src,
    // here issue with magic link
    // 'magic-sdk': options.paths.magicLink,
  },
  extensions: ['.tsx', '.ts', '.js'],
  fallback: {
    assert: require.resolve('assert'),
    crypto: require.resolve('crypto-browserify'),
    'crypto-browserify': require.resolve('crypto-browserify'),
    fs: false,
    http: require.resolve('stream-http'),
    https: require.resolve('https-browserify'),
    net: false,
    os: require.resolve('os-browserify'),
    path: false,
    stream: require.resolve('stream-browserify'),
    tls: false,
    url: require.resolve('url'),
    zlib: false,
  },
  mainFiles: ['index'],
  modules: [options.paths.src, 'node_modules'],
  preferAbsolute: true,
});
