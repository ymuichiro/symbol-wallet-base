module.exports = {
  resolver: {
    extraNodeModules: {
      crypto: require.resolve("symbol-crypto-for-rn"),
      events: require.resolve("events"),
      stream: require.resolve("readable-stream"),
      buffer: require.resolve("buffer"),
    },
  },
};
