export const buildSvgLoader = () => ({
  exclude: /node_modules/,
  issuer: /\.[jt]sx?$/,
  resourceQuery: { not: [/url/] },
  test: /\.svg$/,
  use: ['@svgr/webpack'],
});
