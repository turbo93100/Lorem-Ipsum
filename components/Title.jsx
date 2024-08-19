const Title = (props) => {
  console.log(props);

  return <h1 className={props.color}>{props.text}</h1>;
};

export default Title;
