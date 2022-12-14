import React, { forwardRef } from 'react';

import {
  DropDown,
  DropDownItemContainer,
  DropDownItem,
} from './DropDownMenu.style';

type ItemsProps = {
  data: string[];
  onSelect: (item: string) => void;
};

type Props = {
  data: string[];
  onSelect: (item: string) => void;
};

const DropDownItems = (props: ItemsProps) => {
  return (
    <DropDownItemContainer>
      {React.Children.toArray(
        props.data.map((item: string) => (
          <DropDownItem onClick={() => props.onSelect(item)}>
            {item}
          </DropDownItem>
        ))
      )}
    </DropDownItemContainer>
  );
};

const DropDownMenu = forwardRef(
  (props: Props, ref: React.Ref<HTMLDivElement>) => {
    return (
      <DropDown ref={ref}>
        <DropDownItems onSelect={props.onSelect} data={props.data} />
      </DropDown>
    );
  }
);

export default DropDownMenu;
