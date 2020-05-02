module.exports = function (api) {
  api.cache(true);

  const presets = [ 'module:metro-react-native-babel-preset','@babel/preset-env' ];
  const plugins = [ "@babel/plugin-proposal-class-properties" ];

  return {
    presets,
    plugins
  };
}


