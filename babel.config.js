module.exports = (api) => {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          extensions: ['.js', '.ts', '.tsx', '.json', '.jpg', '.png', '.svg', '.otf', '.ttf'],
          stripExtensions: ['.js', '.ts', '.tsx'],
          root: ['.'],
          alias: {
            '@': './src',
            '@assets': './assets',
          },
        },
      ],
    ],
  };
};
