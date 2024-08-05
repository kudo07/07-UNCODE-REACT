function double(arr) {
  return arr.map((item) => item * 2);
}

function add(arr) {
  return arr.reduce(
    (prev, curr) => prev + curr,
    0 //initial value)
  );
}

<Btn onToggleHighllight={handleToggle} highlight={highlight}>
  {buttonText}
</Btn>;
