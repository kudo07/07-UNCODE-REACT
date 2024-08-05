const Badge = ({ name, classs, section }) => {
  return (
    <>
      <h1>{name}</h1>
      <h3>{classs}</h3>
      <h5>{section}</h5>
    </>
  );
};
const StringProps = () => {
  return (
    <div>
      <Badge name="hello" classs="A" section="B" />
    </div>
  );
};

export default StringProps;
