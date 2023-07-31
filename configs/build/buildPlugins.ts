import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin';
import CircularDependencyPlugin from 'circular-dependency-plugin';
import Dotenv from 'dotenv-webpack';
import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import NodePolyfillPlugin from 'node-polyfill-webpack-plugin';
import webpack, { DefinePlugin, HotModuleReplacementPlugin } from 'webpack';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';
import { BuildOptions } from './types/config';

export const buildPlugins = (
  props: BuildOptions,
): webpack.WebpackPluginInstance[] => {
  const { paths, isDev, isDevDebug, project } = props;

  const prod = !isDev;

  const plugins = [
    new HtmlWebpackPlugin({
      inject: true,
      minify: {
        collapseWhitespace: true,
        keepClosingSlash: true,
        minifyCSS: true,
        minifyJS: true,
        minifyURLs: true,
        removeComments: true,
        removeEmptyAttributes: true,
        removeRedundantAttributes: true,
        removeStyleLinkTypeAttributes: true,
        useShortDoctype: true,
      },
      template: paths.html,
    }),
    new DefinePlugin({
      __IS_DEV__: JSON.stringify(isDev),
      __IS_DEV_DEBUG__: JSON.stringify(isDevDebug),
      __PROJECT__: JSON.stringify(project),
    }),
    new CircularDependencyPlugin({
      exclude: /node_modules/,
      failOnError: Boolean(isDevDebug),
    }),
    new Dotenv({ systemvars: true }),
    new ForkTsCheckerWebpackPlugin({
      typescript: {
        diagnosticOptions: { semantic: true, syntactic: true },
        mode: 'write-references',
      },
    }),
    new NodePolyfillPlugin(),
  ];

  if (isDev) {
    plugins.push(
      new ReactRefreshWebpackPlugin({
        // overlay: isDevDebug,
      }),
    );
    plugins.push(new HotModuleReplacementPlugin());
  }

  if (prod)
    // plugins.push(
    //   new CopyPlugin({
    //     patterns: [
    //       { from: paths.assets, to: paths.assetsBuild }
    //     ],
    //   }),
    // );
    plugins.push(
      new MiniCssExtractPlugin({
        chunkFilename: 'css/[name].[contenthash:8].css',
        filename: 'css/[name].[contenthash:8].css',
      }),
    );

  if (isDevDebug)
    plugins.push(new webpack.ProgressPlugin(), new BundleAnalyzerPlugin());

  return plugins;
};
