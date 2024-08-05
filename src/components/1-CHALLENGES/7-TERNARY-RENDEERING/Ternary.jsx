const Ternary = () => {
  const now = Date.now();
  const hour = now.getHours();

  return hour < 12 ? <p>Good morning!</p> : <p>Good afternoon!</p>;
};
export default Ternary;
