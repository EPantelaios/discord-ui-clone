import { InputContainer } from './InputLayout.style';

type Props = {
  id: string;
  type?: string;
  placeholder?: string;
  autoComplete?: string;
};
function InputLayout(props: Props) {
  return (
    <InputContainer
      id={props.id}
      type={props.type}
      placeholder={props.placeholder}
      autoComplete={props.autoComplete}
    />
  );
}

export default InputLayout;
