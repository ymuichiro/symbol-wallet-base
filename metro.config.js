module.exports = {
  resolver: {
    extraNodeModules: {
      crypto: require.resolve("expo-crypto"),
      buffer: require.resolve("buffer"),
      events: require.resolve("events"),
      stream: require.resolve("readable-stream"),
    },
  },
};
