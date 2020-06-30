const list = Array.from(Array(10).keys()).map(i => ({
  id: i + 1,
  label: `№${i + 1}`,
  username: `Default value for №${i + 1}`
}));

export { list };
