import HeroButtons from './HeroButtons';
import { HeroContainerWrapper } from './HeroContainer.style';
import HeroImageContainer from './HeroImages/HeroImageContainer';
import HeroText from './HeroText';

function HeroContainer() {
  return (
    <>
      <HeroContainerWrapper>
        <HeroText />
        <HeroButtons />
      </HeroContainerWrapper>
      <HeroImageContainer />
    </>
  );
}

export default HeroContainer;
