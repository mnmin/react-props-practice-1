const NameLength = (props) => {
  //const { props, length } = props;
  return (
    <p className="name-length">
      Did you know that {props.name} is {props.carrot.length} characters long?!
    </p>
  );
};
export default NameLength;
