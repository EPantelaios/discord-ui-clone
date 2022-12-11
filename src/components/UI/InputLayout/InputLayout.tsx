import { InputContainer } from './InputLayout.style';

type Props = {
  type?: string;
  placeholder?: string;
};
function InputLayout(props: Props) {
  return <InputContainer type={props.type} placeholder={props.placeholder} />;
}

export default InputLayout;
