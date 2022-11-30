import { forwardRef } from 'react';

import {
  DropDown,
  DropDownItemContainer,
  DropDownItem,
} from './DropDownMenu.style';

const DropDownItems = ({ data, onSelect }) => {
  return (
    <DropDownItemContainer>
      {data.map((item: unknown, index: number) => (
        <DropDownItem key={index} onClick={() => onSelect(item)}>
          {item}
        </DropDownItem>
      ))}
    </DropDownItemContainer>
  );
};

type Props = {
  data: unknown[];
  onSelect: (item: string) => void;
};

const DropDownMenu = forwardRef((props: Props, ref: HTMLElement) => {
  return (
    <DropDown ref={ref}>
      <DropDownItems onSelect={props.onSelect} data={props.data} />
    </DropDown>
  );
});

export default DropDownMenu;
