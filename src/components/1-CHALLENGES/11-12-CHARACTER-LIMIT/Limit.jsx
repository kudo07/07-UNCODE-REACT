// When you pass a function as an onChange prop, when the event occurs, React will invoke that function passing it information
//  about the event as the first argument. You can use that first argument to get the text in the input field using event.target.value.
const Limit = () => {
  const handleChange = (e) => {
    if (e.target.value.length > 10) {
      alert('ruk  ja bhai');
      return;
    }
  };
  return (
    <div>
      <h1>Character Limit</h1>
      <input
        onChange={handleChange}
        type="text"
        placeholder="Enter some text"
      />
    </div>
  );
};

export default Limit;
