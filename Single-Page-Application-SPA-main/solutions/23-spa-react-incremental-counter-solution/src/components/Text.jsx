const Text = (props) => {
  const className = props.count > 5 ? "backgroundOlive" : "";

  return (
    <p className={className}>
      {props.count <= 10
        ? `The current count is: ${props.count}`
        : `Count is bigger than 10`}
    </p>
  );
};

export default Text;
