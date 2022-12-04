import {
  CheckBoxContainer,
  HiddenCheckBox,
  StyledCheckBox,
  Icon,
} from './CheckBox.style';

type Props = {
  checked: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const CheckBox = (props: Props) => (
  <CheckBoxContainer>
    <HiddenCheckBox checked={props.checked} onChange={() => {}} />
    <StyledCheckBox checked={props.checked} onChange={() => {}}>
      <Icon viewBox="0 0 24 24">
        <polyline points="20 6 9 17 4 12" />
      </Icon>
    </StyledCheckBox>
  </CheckBoxContainer>
);

export default CheckBox;
