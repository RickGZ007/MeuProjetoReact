function Button(props) {
    const classes = `button ${props.type || ""}`;

  return (
    <button className={classes}>
      {props.label}
    </button>
  );
}

export default Button;