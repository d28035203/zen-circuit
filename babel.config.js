/**
 * babel.config.js — animated-enigma
 * @author d28035203
 */

module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: ["nativewind/babel", "react-native-reanimated/plugin"],
  };
};
