type ButtonProps = {
  text: string;
  onClick?: any;
};

const Button = (props: ButtonProps) => {
  const { text, onClick } = props;

  return (
    <button
      type="button"
      className={`border border-black px-2 `}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;
