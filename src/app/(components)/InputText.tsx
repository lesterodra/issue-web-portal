type InputTextProps = {
  label: string;
  onChange?: any;
};

const InputText = (props: InputTextProps) => {
  const { label, onChange } = props;

  return (
    <div>
      <p>{label}</p>
      <input type="text" className="border border-black" onChange={onChange} />
    </div>
  );
};

export default InputText;
