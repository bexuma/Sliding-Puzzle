const list = Array.from(Array(10).keys()).map(i => ({
  id: i + 1,
  fullName: `Full Name №${i + 1}`,
  username: `Username №${i + 1}`
}));

export { list };
