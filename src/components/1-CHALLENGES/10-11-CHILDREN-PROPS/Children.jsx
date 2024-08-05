// anything u can pass between the component it will get acces through the children in the children componenet
const Badge = ({ name, section, children }) => {
  return (
    <>
      <div>
        <h1>{name}</h1>
        <h2>{section}</h2>
      </div>
      {children}
    </>
  );
};

const Children = () => {
  const handleClick = () => {
    alert('Added');
  };
  return (
    <>
      <Badge name="A" section="A">
        <p>this is from the parent</p>
        <button onClick={handleClick}>ADD friend</button>
      </Badge>
    </>
  );
};

export default Children;
