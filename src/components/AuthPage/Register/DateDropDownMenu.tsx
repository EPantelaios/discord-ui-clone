import React, { forwardRef } from 'react';

import {
  DropDownContainer,
  DropDown,
  DropDownItemContainer,
  DropDownItem,
} from './DateDropDownMenu.style';

type ItemsProps = {
  data: string[] | number[];
  onSelect: (item: string | number) => void;
};

type Props = {
  data: string[] | number[];
  onSelect: (item: string | number) => void;
};

const DropDownItems = (props: ItemsProps) => {
  return (
    <DropDownItemContainer>
      {React.Children.toArray(
        props.data.map((item: string | number) => (
          <DropDownItem onClick={() => props.onSelect(item)}>
            {item}
          </DropDownItem>
        ))
      )}
    </DropDownItemContainer>
  );
};

const DateDropDownMenu = forwardRef(
  (props: Props, ref: React.Ref<HTMLDivElement>) => {
    return (
      <DropDownContainer>
        <DropDown ref={ref}>
          <DropDownItems onSelect={props.onSelect} data={props.data} />
        </DropDown>
      </DropDownContainer>
    );
  }
);

export default DateDropDownMenu;
