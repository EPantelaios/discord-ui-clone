import React from 'react';

import HeroButtons from './HeroButtons';
import { HeroContainerWrapper } from './HeroContainer.style';
import HeroText from './HeroText';

function HeroContainer() {
  return (
    <HeroContainerWrapper>
      <HeroText />
      <HeroButtons />
    </HeroContainerWrapper>
  );
}

export default HeroContainer;
