module.exports = {
  presets: ['module:@react-native/babel-preset', 'nativewind/babel'],
  plugins: [[
    'module-resolver',
    {
      "root": [
        "./"
      ],
      "extensions": [
        ".tsx",
        ".jsx",
        ".js",
        ".ts",
      ],
      alias: {
        "@": ["./src"],
      },
    },
  ]],
};
